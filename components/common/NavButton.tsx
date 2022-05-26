import { FC, PropsWithChildren } from "react";
import { Button } from "@mui/material";
import { colors } from "styles/theme";

type NavButtonProps = PropsWithChildren<{}>;

const { black } = colors;

export const NavButton: FC<NavButtonProps> = ({ children }) => (
  <Button
    sx={{
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      color: black,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </Button>
);
