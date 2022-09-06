import { FC, PropsWithChildren } from "react";
import { Button } from "@mui/material";
import { colors, breakpoints } from "styles/theme";

type ToggleButtonProps = PropsWithChildren<{
  on: boolean;
  onClick?: () => void;
}>;

export const ToggleButton: FC<ToggleButtonProps> = ({
  on = false,
  children,
  onClick,
}) => {
  const { black, white, lightGrey, mediumGrey, turquoise, lightTurquoise } =
    colors;

  return (
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontStyle: "normal",
        margin: 0,
        lineHeight: "24px",
        [breakpoints.ps]: {
          fontSize: "14px",
        },
        [breakpoints.pl]: {
          fontSize: "14px",
        },
        [breakpoints.ts]: {
          fontSize: "14px",
        },
        [breakpoints.tl]: {
          fontSize: "14px",
        },
        [breakpoints.ds]: {
          fontSize: "16px",
        },
        [breakpoints.dl]: {
          fontSize: "18px",
        },
        borderRadius: "500px",
        fontWeight: 700,
        whiteSpace: "nowrap",
        textTransform: "none",
        color: black,
        backgroundColor: on ? lightTurquoise : lightGrey,
        border: `2px solid ${on ? lightTurquoise : mediumGrey}`,
        p: 1,
        m: 0,
        pl: "30px",
        pr: "30px",
        "&:hover": {
          backgroundColor: turquoise,
          color: white,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
