import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";
// import { Cursor } from "components/common/Cursor";
// import { BreakpointIndicator } from "components/common/BreakpointIndicator";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const basePath = router.pathname.split("/")[0];
  const title = "OpenArchive";
  console.log({ basePath });

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
