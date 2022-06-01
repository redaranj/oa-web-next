import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography } from "styles/theme";

type AcronymItemProps = PropsWithChildren<{
  titleKey: string;
  descriptionOneKey: string;
  descriptionTwoKey: string;
  image: StaticImageData;
}>;

export const AcronymItem: FC<AcronymItemProps> = ({
  titleKey,
  descriptionOneKey,
  descriptionTwoKey,
  image,
}) => {
  const t = useTranslate();
  const { h2, bodyLarge } = typography;

  return (
    <Grid item container direction="column" spacing={4}>
      <Grid item>
        <Box
          component="h2"
          sx={{ ...h2, textAlign: "center" }}
          dangerouslySetInnerHTML={{
            __html: t(titleKey),
          }}
        />
      </Grid>
      <Grid item container direction="row" flexWrap="nowrap">
        <Grid item xs={6}>
          <Box
            component="p"
            sx={bodyLarge}
            dangerouslySetInnerHTML={{
              __html: t(descriptionOneKey),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            component="p"
            sx={bodyLarge}
            dangerouslySetInnerHTML={{
              __html: t(descriptionTwoKey),
            }}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Box
          sx={{
            height: 400,
            backgroundImage: `url(${image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 50px",
            backgroundSize: "1000px",
          }}
        />
      </Grid>
    </Grid>
  );
};
