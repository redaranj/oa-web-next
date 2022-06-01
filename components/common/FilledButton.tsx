import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import rightArrow from "images/right-arrow.svg";
import downArrow from "images/down-arrow.svg";

const { black, white, lightGrey, turquoise } = colors;
const { body } = typography;

type FilledButtonProps = PropsWithChildren<{
  textColor?: string;
  backgroundColor?: string;
  arrowDirection?: "right" | "down" | "none";
}>;

export const FilledButton: FC<FilledButtonProps> = ({
  textColor = black,
  backgroundColor = lightGrey,
  children,
  arrowDirection = "none",
}) => (
  <Button
    sx={{
      ...body,
      borderRadius: "500px",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
      backgroundColor,
      pl: 4,
      pr: 4,
      "&:hover": {
        backgroundColor: turquoise,
        color: white,
      },
    }}
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
