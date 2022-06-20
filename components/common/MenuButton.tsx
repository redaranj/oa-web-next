import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button, Popover } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { colors, typography, loader } from "styles/theme";
import downArrow from "images/down-arrow.svg";

type MenuButtonProps = PropsWithChildren<{
  title: string;
  anchorEl: any;
}>;

export const MenuButton: FC<MenuButtonProps> = ({
  title,
  anchorEl,
  children,
}) => {
  const { black, turquoise } = colors;
  const { body } = typography;
  const isBrowser = typeof window !== "undefined";

  return (
    isBrowser && (
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
                "&:hover": {
                  color: turquoise,
                  img: {
                    filter:
                      "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                  },
                },
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
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
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
    )
  );
};
