import * as fs from "fs";
import matter from "gray-matter";

export const getIndexProps = (basePath: string) => {
  const paths = fs.readdirSync(basePath);
  console.log({ paths });
  const pages = paths
    .filter((path) => path.endsWith(".mdx") && !path.endsWith("index.mdx"))
    .map((path) => {
      const {
        data: { title },
      } = matter(fs.readFileSync(`${basePath}/${path}`));
      return { path, title };
    });

  return {
    props: { pages },
  };
};
