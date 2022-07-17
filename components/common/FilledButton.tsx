import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import rightArrow from "public/images/right-arrow.svg";
import downArrow from "public/images/down-arrow.svg";

const { black, white, lightGrey, turquoise } = colors;
const { body } = typography;

type FilledButtonProps = PropsWithChildren<{
  textColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  arrowDirection?: "right" | "down" | "none";
  onClick?: () => void;
}>;

export const FilledButton: FC<FilledButtonProps> = ({
  textColor = black,
  backgroundColor = lightGrey,
  highlightColor = turquoise,
  children,
  arrowDirection = "none",
  onClick,
}) => (
  <Button
    sx={{
      ...body,
      borderRadius: "500px",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
      backgroundColor,
      p: 1,
      pl: "30px",
      pr: "30px",
      "&:hover": {
        backgroundColor: highlightColor,
        color: white,
      },
    }}
    onClick={onClick}
  >
    {children}
    {arrowDirection === "right" && (
      <Box sx={{ ml: "8px" }}>
        <Image src={rightArrow} alt="" loader={loader} />
      </Box>
    )}
    {arrowDirection === "down" && (
      <Box sx={{ ml: "8px" }}>
        <Image src={downArrow} alt="" loader={loader} />
      </Box>
    )}
  </Button>
);
