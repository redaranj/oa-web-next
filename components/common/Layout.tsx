import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { TopNav } from "components/common/TopNav";
import { Footer } from "components/common/Footer";
import { breakpoints } from "styles/theme";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { phoneSmall, tabletSmall } = breakpoints;

  return (
    <>
      <TopNav />
      <Box
        sx={{
          paddingTop: 12,
          [phoneSmall]: {
            paddingTop: 3,
          },
          [tabletSmall]: { paddingTop: 6 },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
