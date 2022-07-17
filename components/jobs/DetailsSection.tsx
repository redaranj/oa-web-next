import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

export const DetailsSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <Box sx={{ backgroundColor: white }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
