import { FC, PropsWithChildren } from "react";
import { Box, Button } from "@mui/material";
import { colors } from "styles/theme";

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
      <Box
        component="img"
        sx={{ ml: "8px" }}
        alt=""
        src="/images/right-arrow.svg"
      />
    )}
    {arrowDirection === "down" && (
      <Box
        component="img"
        sx={{ ml: "8px" }}
        alt=""
        src="/images/down-arrow.svg"
      />
    )}
  </Button>
);
