import * as fs from "fs";
import matter from "gray-matter";

export const getImagePath = (image: string) => {
  const basePath = process.env.CI ? "/web-next" : "";

  return `${basePath}/images/${image}`;
};

export const getIndexProps = (basePath: string) => {
  const paths = fs.readdirSync(basePath);
  const pages = paths
    .filter((path) => path.endsWith(".mdx") && !path.endsWith("index.mdx"))
    .map((path) => {
      const fullPath = `${basePath}/${path}`;
      const navPath = fullPath.replace("pages", "").replace(".mdx", "");
      const {
        data: {
          title = "",
          name = "",
          quote = "",
          description = "",
          category = "",
          date = "",
          image = "",
        },
      } = matter(fs.readFileSync(fullPath));
      return {
        path: navPath,
        title,
        name,
        quote,
        description,
        category,
        date,
        image,
      };
    });

  return {
    props: { pages },
  };
};
