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
    <Box sx={{ backgroundColor, ...backgroundImageProps, width: "100vw" }}>
      <Box
        sx={{
          margin: "auto",
          maxWidth: 1920,
          padding: "150px 90px",
          [phoneSmall]: {
            padding: "150px 90px",
          },
          [tabletSmall]: {
            padding: "150px 90px",
          },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
