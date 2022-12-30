import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Box } from "@mui/material";
import { loader, breakpoints } from "styles/theme";

type IconLinkProps = PropsWithChildren<{
  image: string;
  size: string;
  url: string;
  alt: string;
}>;

export const IconLink: FC<IconLinkProps> = ({ image, size, url, alt }) => {
  const { ps, pl } = breakpoints;

  return (
    <Link href={url} target={url?.startsWith("/") ? "_self" : "_blank"}>
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
