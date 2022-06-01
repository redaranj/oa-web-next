import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { colors, loader } from "styles/theme";
import rightArrow from "images/right-arrow.svg";
import downArrow from "images/down-arrow.svg";

type OutlinedButtonProps = PropsWithChildren<{
  textColor?: string;
  borderColor?: string;
  arrowDirection?: "right" | "down" | "none";
}>;

const { black, white, mediumGrey, turquoise } = colors;

export const OutlinedButton: FC<OutlinedButtonProps> = ({
  textColor = black,
  borderColor = mediumGrey,
  arrowDirection = "none",
  children,
}) => (
  <Button
    sx={{
      border: `1px solid ${borderColor}`,
      borderRadius: "500px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
      pl: 4,
      pr: 4,
      "&:hover": {
        backgroundColor: turquoise,
        border: `1px solid ${turquoise}`,
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
