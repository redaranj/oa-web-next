import { FC, PropsWithChildren } from "react";
import { Grid, } from "@mui/material";
import { breakpoints, colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const ResearchSection: FC<PropsWithChildren> = ({
  children
}) => {
  const { lightGrey } = colors;
  const { ps, ts } = breakpoints;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [ts]: { flexDirection: "row" },
        }}
        spacing={6}
      >
        {children}
      </Grid>
    </BaseHeaderSection >
  );
};
