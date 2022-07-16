import { FC } from "react";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";
// import { BreakpointIndicator } from "components/common/BreakpointIndicator";
import { breakpoints } from "styles/theme";

interface LayoutProps {
  title?: string;
  children: any;
}

export const Layout: FC<LayoutProps> = ({
  title = "OpenArchive",
  children,
}) => {
  const { ps, ts } = breakpoints;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopNav />
      <Box
        sx={{
          paddingTop: 12,
          [ps]: {
            paddingTop: 3,
          },
          [ts]: { paddingTop: 6 },
        }}
      >
        <Stack>{children}</Stack>
      </Box>
      <Footer />
    </>
  );
};
