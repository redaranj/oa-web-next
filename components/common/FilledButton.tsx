import { FC, PropsWithChildren } from "react";
import { Button } from "@mui/material";
import { colors } from "styles/theme";

const { black, white, lightGrey, turquoise } = colors;

type FilledButtonProps = PropsWithChildren<{
  textColor?: string;
  backgroundColor?: string;
}>;

export const FilledButton: FC<FilledButtonProps> = ({
  textColor = black,
  backgroundColor = lightGrey,
  children,
}) => (
  <Button
    sx={{
      borderRadius: "500px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
      backgroundColor,
      pl: "20px",
      pr: "20px",
      "&:hover": {
        backgroundColor: turquoise,
        color: white,
      },
    }}
  >
    {children}
  </Button>
);
