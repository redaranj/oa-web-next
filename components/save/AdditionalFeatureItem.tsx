import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { colors, typography, loader } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const AdditionalFeatureItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;
  const { bodyLarge } = typography;
  const [first, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Box
      sx={{
        height: "370px",
        width: "100%",
        backgroundColor: turquoise,
        "&:hover .slide": {
          transition: "0.5s",
          bottom: "0px",
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 6, backgroundColor: white, width: "100%", height: "100%" }}>
        <Box sx={{ width: 60, mb: 3 }}>
          <Image src={image} alt="" loader={loader} />
        </Box>
        <Box sx={{ width: "80%" }}>{title}</Box>
      </Box>
      <Box
        className="slide"
        sx={{
          width: "100%",
          backgroundColor: `${turquoise}fd`,
          color: white,
          height: "370px",
          position: "absolute",
          bottom: "-370px",
          transition: "1.5s",
        }}
      >
        <Box
          sx={{
            "> p": {
              ...bodyLarge,
              color: white,
              "& em > strong": {
                color: white,
              },
              p: 4,
              m: 0,
            },
          }}
        >
          {description}
        </Box>
      </Box>
    </Box>
  );
};
