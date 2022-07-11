import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@mui/material";
import { Layout } from "components/common/Layout";
import { QuestionsSection } from "components/faq/QuestionsSection";
import { ContactUsSection } from "components/faq/ContactUsSection";

const FAQ: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: FAQ</title>
    </Head>
    <Stack>
      <QuestionsSection />
      <ContactUsSection />
    </Stack>
  </Layout>
);

export default FAQ;
