import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import rehypeImageSize from "rehype-img-size";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMDXFrontmatter],
    rehypePlugins: [[rehypeImageSize, { dir: "public/images" }]],
  },
});

const config = withMDX({
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/RJob",
        destination: "/jobs/decentralized-storage-researcher",
        permanent: true,
      },
      {
        source: "/UkraineMediaGuide",
        destination: "/guides/ukraine-media-guide",
        permanent: true,
      },
      {
        source: "/2022-02-24-Ukraine-Media-Guide",
        destination: "/guides/ukraine-media-guide",
        permanent: true,
      },
    ];
  },
});

export default config;
