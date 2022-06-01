import { FC } from "react";
import { useTranslate } from "react-polyglot";
import { Box, Button, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";

type MobileMenuProps = {
  closeMenu: any;
};

export const MobileMenu: FC<MobileMenuProps> = ({ closeMenu }) => {
  const t = useTranslate();
  const { white, turquoise } = colors;

  return (
    <Box
      sx={{
        backgroundColor: turquoise,
        color: white,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ backgroundColor: white, height: 50 }}>
        <Button onClick={closeMenu}>Close</Button>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "75%" }}
      >
        <Grid item container direction="column">
          <Grid item container direction="column">
            <Grid item>{t("ourWork")}</Grid>
            <Grid item>{t("save")}</Grid>
            <Grid item>{t("guides")}</Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>{t("about")}</Grid>
            <Grid item>{t("aboutUs")}</Grid>
            <Grid item>{t("team")}</Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <OutlinedButton>Donate</OutlinedButton>
        </Grid>
      </Grid>
    </Box>
  );
};
