import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import rehypeImageSize from "rehype-img-size";

const basePath = !!process.env.CI ? "/web-next" : "";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMDXFrontmatter],
    rehypePlugins: [rehypeImageSize, { dir: "" }],
  },
});

const config = withMDX({
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  images: {
    loader: "custom",
  },
  pageExtensions: ["ts", "tsx", "mdx"],
});

export default config;
