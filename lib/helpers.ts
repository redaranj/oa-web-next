import { promises as fs, readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import matter from "gray-matter";
import { unified } from 'unified';
import remarkParse from "remark-parse";
import remarkMdx from 'remark-mdx';
import { visit } from "unist-util-visit";
import strip from 'strip-markdown';

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
  const documents = await files
    .filter((path: string) => path.endsWith(".mdx") && !path.endsWith("index.mdx"))
    .reduce((acc: Object, path: string): Object => {
      const key = path.replace(/.+?pages\//, '').replace('.mdx', '')
      const contents = readFileSync(path, 'utf8');
      const texts = [];
      const ast = unified().use(remarkParse).use(remarkMdx).parse(contents);
      const visitMdx = () => (tree: any) => {
        visit(tree, () => true, node => {
          if (node.type === "text") {
            texts.push(node.value.replace(/(\r\n|\n|\r|\||-)/gm, "").replace(/ +(?= )/g, " "));
          }
        })
      }
      const processor = unified().use(strip).use(visitMdx);
      processor.runSync(ast)
      acc[key] = texts.join(" ")
      return acc;
    }, {})

  return {
    props: { documents },
  };
};
