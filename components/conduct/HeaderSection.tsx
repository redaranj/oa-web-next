import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import codeConduct from "public/images/code-of-conduct.png";

export const HeaderSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { outlinedButton } = typography;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={7} sx={{ a: outlinedButton }}>
          {children}
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ width: "70%", margin: "0 auto" }}>
            <Image src={codeConduct} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
