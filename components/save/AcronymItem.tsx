import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

export const AcronymItem: FC = ({ children }) => {
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid item container direction="column">
      <Grid item>
        <Box sx={{ textAlign: "center", mb: "70px" }}>{title}</Box>
      </Grid>
      <Grid
        item
        container
        direction="row"
        flexWrap="nowrap"
        sx={{
          width: "50%",
          [ps]: { width: "100%" },
          [tl]: { width: "33%" },
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Box sx={{ "> p": bodyLarge }}>{description}</Box>
      </Grid>
      <Grid item sx={{ width: "50%" }}>
        <Box
          sx={{
            height: "550px",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 75px",
            backgroundSize: "1250px",
          }}
        />
      </Grid>
    </Grid>
  );
};
