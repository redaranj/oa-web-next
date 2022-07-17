import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";
// import { BreakpointIndicator } from "components/common/BreakpointIndicator";
import { breakpoints } from "styles/theme";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const basePath = router.pathname.split("/")[0];
  const title = "OpenArchive";
  console.log({ basePath });

  const { ps, ts, dl } = breakpoints;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopNav />
      <Box
        sx={{
          pt: "90px",
          [ps]: { pt: "50px" },
          [ts]: { pt: "80px" },
          [dl]: { pt: "90px" },
        }}
      >
        <Stack>{children}</Stack>
      </Box>
      <Footer />
    </>
  );
};
