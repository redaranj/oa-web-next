import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { colors, loader } from "styles/theme";

type IconLinkProps = PropsWithChildren<{
  image: string;
  size: string;
  url: string;
  alt: string;
  inset?: string;
}>;

const { black } = colors;

export const IconLink: FC<IconLinkProps> = ({
  image,
  size,
  url,
  alt,
  inset = "0px",
}) => (
  <Link href={url}>
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        textTransform: "none",
        color: black,
        whiteSpace: "nowrap",
        width: size,
        p: 0,
        m: 0,
        ml: inset,
        mr: inset,
        "&:hover": {
          background: "none",
        },
      }}
    >
      <Box
        sx={{
          "&:hover": {
            filter:
              "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
          },
        }}
      >
        <Image
          src={image}
          alt={alt}
          width={size}
          height={size}
          loader={loader}
        />
      </Box>
    </Button>
  </Link>
);
