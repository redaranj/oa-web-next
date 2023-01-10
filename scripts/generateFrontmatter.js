/* eslint-disable no-restricted-syntax */
import matter from "gray-matter";
import { promises as fs, readFileSync } from "fs";

const dir = `${process.cwd()}/pages/`;
const files = [];
const dirents = await fs.readdir(dir, { withFileTypes: true });

for await (const dirent of dirents) {
  if (dirent.isDirectory()) {
    const dirents2 = await fs.readdir(`${dir}/${dirent.name}`, {
      withFileTypes: true,
    });
    for (const dirent2 of dirents2) {
      files.push(`${dirent.name}/${dirent2.name}`);
    }
  } else {
    files.push(dirent.name);
  }
}

const frontmatter = files
  .filter((path) => path.endsWith(".mdx"))
  .reduce((acc, path) => {
    let key = `/${path.replace(".mdx", "").replace("/index", "")}`;
    if (key === "/index") key = "/";
    const fullPath = `${dir}/${path}`;
    const {
      data: { title, description, image },
    } = matter(readFileSync(fullPath));
    acc[key] = {
      path: key,
      title,
      description,
      image,
    };
    return acc;
  }, {});

await fs.writeFile(
  `${process.cwd()}/public/json/frontmatter.json`,
  JSON.stringify(frontmatter, null, 2)
);
