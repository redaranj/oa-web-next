import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button, Popover, Grid } from "@mui/material";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { colors, typography, loader } from "styles/theme";
import downArrow from "public/images/down-arrow.svg";

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
                height: "100%",
                minWidth: 120,
                textAlign: "center",
                fontWeight: 700,
                textTransform: "none",
                color: black,
                whiteSpace: "nowrap",
                cursor: "pointer",
                "&:hover": {
                  color: turquoise,
                  backgroundColor: "transparent",
                  img: {
                    filter:
                      "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                  },
                },
              }}
              {...bindHover(popupState)}
            >
              <Grid container direction="row" wrap="nowrap">
                <Grid item>{title}</Grid>
                <Grid item>
                  <Box sx={{ ml: "6px", mt: "-3px", width: 20 }}>
                    <Image src={downArrow} alt="" loader={loader} />
                  </Box>
                </Grid>
              </Grid>
            </Button>
            <HoverPopover
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
            </HoverPopover>
          </>
        )}
      </PopupState>
    )
  );
};
