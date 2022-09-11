import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

export const DetailItem: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <Box sx={{ backgroundColor: white, p: 3 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
            pt: 1,
          }}
        >
          {first}
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          <Box
            sx={{
              "& p": bodyLarge,
              ul: { p: 0, m: 0, [ps]: { p: 2 }, [ts]: { p: 0 } },
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
