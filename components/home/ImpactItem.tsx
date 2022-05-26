import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography } from "styles/theme";

type ImpactItemProps = PropsWithChildren<{
  title: string;
  description: string;
  image: string;
}>;

export const ImpactItem: FC<ImpactItemProps> = ({
  title,
  description,
  image,
}) => {
  const { h5, bodyLarge } = typography;

  return (
    <Grid item container direction="column" sx={{ width: "25%" }}>
      <Grid item>
        <img src={`/images/${image}`} />
      </Grid>
      <Grid item>
        <Box component="h5" sx={h5}>
          {title}
        </Box>
      </Grid>
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {description}
        </Box>
      </Grid>
    </Grid>
  );
};
