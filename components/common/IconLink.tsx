import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { colors, loader } from "styles/theme";

type IconLinkProps = PropsWithChildren<{
  image: string;
  size: string;
  url: string;
  alt: string;
}>;

const { black } = colors;

export const IconLink: FC<IconLinkProps> = ({ image, size, url, alt }) => (
  <Link href={url}>
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        textTransform: "none",
        color: black,
        whiteSpace: "nowrap",
      }}
    >
      <Image src={image} alt={alt} width={size} height={size} loader={loader} />
    </Button>
  </Link>
);
