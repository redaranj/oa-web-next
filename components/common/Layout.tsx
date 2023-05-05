import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Stack } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const title = "OpenArchive";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopNav />
      <Stack>{children}</Stack>
      <Footer />
    </>
  );
};
