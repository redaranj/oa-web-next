import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

export const DetailItem: FC = ({ children }) => {
  const { white } = colors;
  const [first, ...rest] = children as any[];

  return (
    <Box sx={{ backgroundColor: white, p: 3 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6} sx={{ pt: 1 }}>
          {first}
        </Grid>
        <Grid item xs={6}>
          {rest}
        </Grid>
      </Grid>
    </Box>
  );
};
