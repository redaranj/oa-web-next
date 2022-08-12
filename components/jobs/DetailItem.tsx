import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";

export const DetailItem: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
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
          <Box
            sx={{
              "& p": bodyLarge,
              ul: { p: 0, m: 0 },
              li: { ...bodyLarge, mb: 1, listStylePosition: "outside" },
            }}
          >
            {rest}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
