import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const basePath = !!process.env.CI ? "/web-next" : "";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm],
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
