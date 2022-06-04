import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button, Popover } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { colors, typography, loader } from "styles/theme";
import downArrow from "images/down-arrow.svg";

type MenuButtonProps = PropsWithChildren<{
  title: string;
}>;

export const MenuButton: FC<MenuButtonProps> = ({ title, children }) => {
  const { black, turquoise } = colors;
  const { body } = typography;

  return (
    <PopupState variant="popover" popupId={title}>
      {(popupState) => (
        <>
          <Button
            sx={{
              ...body,
              fontWeight: 700,
              textTransform: "none",
              color: black,
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            {...bindTrigger(popupState)}
          >
            {title}
            <Box sx={{ ml: "6px", mt: "-3px" }}>
              <Image src={downArrow} alt="" loader={loader} />
            </Box>
          </Button>
          <Popover
            elevation={0}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              sx: { backgroundColor: turquoise, minWidth: 400, mt: 1 },
            }}
          >
            <Box sx={{ p: 4 }}>{children}</Box>
          </Popover>
        </>
      )}
    </PopupState>
  );
};
