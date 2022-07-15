import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/use/HeaderSection";
import { UseCasesSection } from "components/use/UseCasesSection";
import * as fs from "fs";
import matter from "gray-matter";

interface UseProps {
  pages: any[];
}

const Use: NextPage<UseProps> = ({ pages }) => (
  <Layout>
    <Head>
      <title>OpenArchive: Use Cases</title>
    </Head>
    <Stack>
      <HeaderSection />
      <UseCasesSection pages={pages} />
    </Stack>
  </Layout>
);

export default Use;

export async function getServerSideProps(context) {
  const paths = fs.readdirSync("pages/use");
  console.log({ paths });
  const pages = paths
    .filter((path) => path.endsWith(".mdx"))
    .map((path) => {
      const {
        data: { title },
      } = matter(fs.readFileSync(`pages/use/${path}`));
      return { path, title };
    });

  console.log({ pages });
  return {
    props: { pages },
  };
}
