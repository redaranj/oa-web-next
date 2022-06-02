import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, loader } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";

type TeamItemProps = PropsWithChildren<{
  name: string;
  jobTitle: string;
  bio: string;
  image: StaticImageData;
  backgroundColor: string;
}>;

export const TeamItem: FC<TeamItemProps> = ({
  name,
  jobTitle,
  bio,
  image,
  backgroundColor,
}) => {
  const t = useTranslate();
  const { turquoise } = colors;
  const { h6, bodyLarge, body } = typography;

  return (
    <Grid item>
      <Box sx={{ backgroundColor, p: 6 }}>
        <Grid item container direction="row" flexWrap="nowrap" spacing={4}>
          <Grid
            item
            container
            direction="row"
            sx={{ width: "50%" }}
            flexWrap="nowrap"
            spacing={4}
          >
            <Grid item>
              <Image src={image} loader={loader} width={100} />
            </Grid>
            <Grid item container direction="column">
              <Box component="h6" sx={h6}>
                {name}
              </Box>
              <Box component="p" sx={{ ...body, color: turquoise }}>
                {jobTitle}
              </Box>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, pb: 3 }}>
                {bio}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
