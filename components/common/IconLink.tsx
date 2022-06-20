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
      }}
    >
      <Image src={image} alt={alt} width={size} height={size} loader={loader} />
    </Button>
  </Link>
);
