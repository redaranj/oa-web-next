import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, loader } from "styles/theme";
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
  const { bodyLarge } = typography;

  return (
    <Grid
      item
      container
      direction="row"
      sx={{ backgroundColor }}
      flexWrap="nowrap"
      spacing={4}
    >
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
          <Box component="p" sx={bodyLarge}>
            {name}
          </Box>
        </Grid>
        <Grid item>
          <Box component="p" sx={bodyLarge}>
            {jobTitle}
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        <Box component="p" sx={bodyLarge}>
          {bio}
        </Box>
        <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
      </Grid>
    </Grid>
  );
};
