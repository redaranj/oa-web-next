import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import codeConduct from "public/images/code-of-conduct.png";

export const HeaderSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { outlinedButton } = typography;
  const { ps, ts } = breakpoints;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [ts]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            a: outlinedButton,
            width: "60%",
            [ps]: { width: "100%" },
            [ts]: { width: "60%" },
          }}
        >
          {children}
        </Grid>
        <Grid
          item
          sx={{ width: "40%", [ps]: { width: "100%" }, [ts]: { width: "40%" } }}
        >
          <Box sx={{ width: "70%", margin: "0 auto" }}>
            <Image src={codeConduct} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
