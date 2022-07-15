import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Layout } from "components/common/Layout";

interface MarkdownWrapperProps {
  title: string;
  components: any;
}

export const MarkdownWrapper: FC<MarkdownWrapperProps> = ({
  title,
  components,
  children,
}) => (
  <Layout>
    <Head>
      <title>OpenArchive: {title}</title>
    </Head>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Layout>
);
