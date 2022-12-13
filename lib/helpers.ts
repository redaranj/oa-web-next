import { promises as fs, readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import matter from "gray-matter";

const getFiles = async (dir: string) => {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

export const getIndexProps = async (basePath: string) => {
  const paths = readdirSync(basePath);
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
      } = matter(readFileSync(fullPath));
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
    }).sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);

  return {
    props: { pages },
  };
};

export const getSearchDocumentsProps = async () => {
  const files = await getFiles("pages/");
  const documents = files
    .filter((path) => path.endsWith(".mdx") && !path.endsWith("index.mdx"))
    .reduce((acc, path) => {
      const key = path.replace(/.+?pages\//, '').replace('.mdx', '')
      const contents = readFileSync(path, 'utf8');
      acc[key] = contents.toString();
      return acc;
    }, {})


  return {
    props: { documents },
  };
};
