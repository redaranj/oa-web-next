import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box } from "@mui/material";
import { breakpoints } from "styles/theme";

type PageSectionProps = PropsWithChildren<{
  backgroundColor: string;
  backgroundImage?: StaticImageData;
  sx?: any;
}>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  backgroundImage,
  sx = {},
  children,
}) => {
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const backgroundImageProps = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }
    : {};

  return (
    <Box sx={{ backgroundColor, ...backgroundImageProps, width: "100vw" }}>
      <Box
        sx={{
          margin: "auto",
          maxWidth: 1920,
          py: 11,
          px: 11.25,
          [ps]: {
            py: 6,
            px: 3,
          },
          [pl]: {
            py: 6,
            px: 3,
          },
          [ts]: {
            py: 7,
            px: 4.375,
          },
          [tl]: {
            py: 9,
            px: 4.375,
          },
          [ds]: {
            py: 10,
            px: 6.25,
          },
          [dl]: {
            py: 11,
            px: 11.25,
          },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
