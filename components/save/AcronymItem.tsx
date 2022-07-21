import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, breakpoints } from "styles/theme";

/*
type AcronymItemProps = PropsWithChildren<{
  titleKey: string;
  descriptionOneKey: string;
  descriptionTwoKey: string;
  image: StaticImageData;
}>;
*/
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
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "35%",
            [ps]: { width: "100%" },
            [tl]: { width: "33%" },
          }}
        >
          <Box component="p" sx={bodyLarge}>
            {description}
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            width: "17%",
            [ps]: { width: "100%" },
            [tl]: { width: "17%" },
          }}
        />
        <Grid
          item
          sx={{
            width: "35%",
            [ps]: { width: "100%" },
            [tl]: { width: "33%" },
          }}
        >
          <Box component="p" sx={bodyLarge}>
            {description}
          </Box>
        </Grid>
      </Grid>
      <Grid item>
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
