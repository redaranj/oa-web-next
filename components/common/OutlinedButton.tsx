import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Box, Button } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import rightArrow from "public/images/right-arrow.svg";
import downArrow from "public/images/down-arrow.svg";

type InnerButtonProps = PropsWithChildren<{
  textColor?: string;
  borderColor?: string;
  arrowDirection?: "right" | "up" | "down" | "none";
  onClick?: () => void;
}>;

const { black, white, mediumGrey, turquoise } = colors;
const { body } = typography;
const arrows = {
  up: downArrow,
  down: downArrow,
  right: rightArrow,
};

export const InnerButton: FC<InnerButtonProps> = ({
  textColor = black,
  borderColor = mediumGrey,
  arrowDirection = "none",
  onClick,
  children,
}) => (
  <Button
    onClick={onClick}
    sx={{
      border: `1px solid ${borderColor}`,
      ...body,
      borderRadius: "500px",
      whiteSpace: "nowrap",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
      p: 1.25,
      pl: "40px",
      pr: "40px",
      "&:hover": {
        backgroundColor: turquoise,
        border: `1px solid ${turquoise}`,
        color: white,
        img: {
          filter:
            "brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%) hue-rotate(99deg) brightness(107%) contrast(105%)",
        },
      },
    }}
  >
    {children}
    {arrowDirection !== "none" && (
      <Box
        sx={{
          ml: "8px",
          mt: arrowDirection === "up" ? "4px" : "-3px",
          transform: arrowDirection === "up" ? "rotate(180deg)" : null,
        }}
      >
        <Image src={arrows[arrowDirection]} alt="" loader={loader} />
      </Box>
    )}
  </Button>
);

type OutlinedButtonProps = PropsWithChildren<{
  textColor?: string;
  borderColor?: string;
  arrowDirection?: "right" | "up" | "down" | "none";
  href?: string;
  onClick?: () => void;
}>;

export const OutlinedButton: FC<OutlinedButtonProps> = ({
  textColor,
  borderColor,
  arrowDirection,
  href,
  onClick,
  children,
}) =>
  href ? (
    <Link href={href} style={{ textDecoration: "none !important" }}>
      <InnerButton
        textColor={textColor}
        borderColor={borderColor}
        arrowDirection={arrowDirection}
      >
        {children}
      </InnerButton>
    </Link>
  ) : (
    <InnerButton
      textColor={textColor}
      borderColor={borderColor}
      arrowDirection={arrowDirection}
      onClick={onClick}
    >
      {children}
    </InnerButton>
  );
