import { FC, PropsWithChildren } from "react";
import { Button } from "@mui/material";
import { colors } from "styles/theme";

type MenuButtonProps = PropsWithChildren<{}>;

const { black } = colors;

export const MenuButton: FC<MenuButtonProps> = ({ children }) => (
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
