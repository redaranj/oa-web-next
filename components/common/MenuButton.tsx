import { FC, PropsWithChildren } from "react";
import { Box, Button, Popover } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { colors } from "styles/theme";

type MenuButtonProps = PropsWithChildren<{
  title: string;
}>;

const { black, turquoise } = colors;

export const MenuButton: FC<MenuButtonProps> = ({ title, children }) => (
  <PopupState variant="popover" popupId="demo-popup-popover">
    {(popupState) => (
      <>
        <Button
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            textTransform: "none",
            color: black,
            whiteSpace: "nowrap",
          }}
          {...bindTrigger(popupState)}
        >
          {title}
        </Button>
        <Popover
          elevation={0}
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{ sx: { backgroundColor: turquoise } }}
        >
          <Box sx={{ p: 2 }}>{children}</Box>
        </Popover>
      </>
    )}
  </PopupState>
);
