import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";
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
      <Box>
        <Stack>{children}</Stack>
      </Box>
      <Footer />
    </>
  );
};
