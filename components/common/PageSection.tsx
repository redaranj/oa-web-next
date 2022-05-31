import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box } from "@mui/material";

type PageSectionProps = PropsWithChildren<{
  backgroundColor: string;
  backgroundImage?: StaticImageData;
}>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  backgroundImage,
  children,
}) => {
  const backgroundImageProps = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        backgroundSize: "100%",
      }
    : {};

  return (
    <Box sx={{ backgroundColor, ...backgroundImageProps }}>
      <Box sx={{ margin: "auto", maxWidth: 1920 }}>{children}</Box>
    </Box>
  );
};
