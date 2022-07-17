import * as fs from "fs";
import matter from "gray-matter";

export const getIndexProps = (basePath: string) => {
  const paths = fs.readdirSync(basePath);
  const pages = paths
    .filter((path) => path.endsWith(".mdx") && !path.endsWith("index.mdx"))
    .map((path) => {
      const {
        data: {
          title = "",
          description = "",
          category = "",
          date = "",
          image = "",
        },
      } = matter(fs.readFileSync(`${basePath}/${path}`));
      return { path, title, description, category, date, image };
    });

  return {
    props: { pages },
  };
};
