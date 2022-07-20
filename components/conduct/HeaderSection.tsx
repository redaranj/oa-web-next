import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const HeaderSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
        }}
      >
        {children}
      </Grid>
    </BaseHeaderSection>
  );
};
