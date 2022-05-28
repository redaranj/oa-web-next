import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box, Container } from "@mui/material";
import { breakpoints as bp } from "styles/theme";

type PageSectionProps = PropsWithChildren<{
  backgroundColor: string;
  backgroundImage?: StaticImageData;
}>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  backgroundImage,
  children,
}) => {
  console.log({ backgroundImage });
  const backgroundImageProps = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        backgroundSize: "100%",
      }
    : {};
  console.log({ backgroundImageProps });
  return (
    <Box sx={{ backgroundColor, ...backgroundImageProps }}>
      <Container
        sx={{
          maxWidth: 1920,
          [bp.desktopSmall]: {},
          [bp.tabletLarge]: {},
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
