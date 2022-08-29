import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { colors, loader, breakpoints } from "styles/theme";

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
}) => {
  const { ps, pl } = breakpoints;

  return (
    <Link href={url}>
      <Box
        sx={{
          "&:hover": {
            filter:
              "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
          },
          width: size,
          height: size,
          [ps]: {
            width: parseInt(size, 10) / 1.25,
            height: parseInt(size, 10) / 1.25,
          },
          [pl]: { width: size, height: size },
        }}
      >
        <Image src={image} alt={alt} loader={loader} />
      </Box>
    </Link>
  );
};
