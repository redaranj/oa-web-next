import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { breakpoints, colors } from "styles/theme";

export const AdditionalFeatureItem: FC = ({ children }) => {
  const { white } = colors;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Box sx={{ p: 6, backgroundColor: white, width: "100%", height: "100%" }}>
        {image}
        {title}
        {description}
      </Box>
    </Grid>
  );
};
