import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { breakpoints } from "styles/theme";

type PageSectionProps = PropsWithChildren<{
  backgroundColor: string;
  backgroundImage?: StaticImageData;
}>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  backgroundImage,
  children,
}) => {
  const { phoneSmall, tabletSmall } = breakpoints;
  const backgroundImageProps = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }
    : {};

  return (
    <Grid item>
      <Box sx={{ backgroundColor, ...backgroundImageProps }}>
        <Box
          sx={{
            margin: "auto",
            maxWidth: 1920,
            pl: 6,
            pr: 6,
            [phoneSmall]: {
              pl: 3,
              pr: 3,
            },
            [tabletSmall]: { pl: 4, pr: 4 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
