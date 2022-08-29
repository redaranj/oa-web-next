import { FC } from "react";
import Link from "next/link";
import { useTranslate } from "react-polyglot";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";

type MenuItemProps = {
  title: string;
  url: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, url }) => {
  const { body } = typography;
  const { white } = colors;
  const itemStyles = { ...body, fontWeight: 600, color: white, mb: 0 };

  return (
    <Grid item>
      <Link href={url} passHref>
        <Box component="a" sx={{ textDecoration: "none" }}>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <Box sx={itemStyles}>{title}</Box>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};

type MobileMenuProps = {
  closeMenu: any;
};

export const MobileMenu: FC<MobileMenuProps> = ({ closeMenu }) => {
  const t = useTranslate();
  const { white, black, turquoise } = colors;
  const { body } = typography;
  const headerStyles = { ...body, color: white, mb: 1 };

  return (
    <Box
      sx={{
        backgroundColor: turquoise,
        color: white,
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        p: 3,
      }}
    >
      <Grid container direction="column" justifyContent="space-between">
        <Grid item container direction="column">
          <Grid item container direction="column">
            <Grid item>
              <Box sx={headerStyles}>{t("ourWork")}</Box>
            </Grid>
            <MenuItem title={t("saveApp")} url="/save" />
            <MenuItem title={t("guides")} url="/guides" />
            <MenuItem title={t("useCases")} url="/use" />
          </Grid>
          <Grid item container direction="column">
            <Box sx={{ borderTop: `1px solid ${white}`, mt: 3, pt: 3 }}>
              <MenuItem title={t("news")} url="/news" />
            </Box>
          </Grid>
          <Grid item container direction="column">
            <Box sx={{ borderTop: `1px solid ${white}`, mt: 3, pt: 3 }}>
              <Grid item>
                <Box sx={headerStyles}>{t("about")}</Box>
              </Grid>
              <MenuItem title={t("aboutUs")} url="/about" />
              <MenuItem title={t("team")} url="/team" />
              <MenuItem title={t("partnerWithUs")} url="/partner" />
              <MenuItem title={t("workWithUs")} url="/jobs" />
              <MenuItem title={t("contactUs")} url="/contact" />
              <MenuItem title={t("faq")} url="/faq" />
            </Box>
          </Grid>
          <Grid item sx={{ textAlign: "center" }}>
            <Box sx={{ width: "100%", mt: 6 }}>
              <FilledButton backgroundColor={white} textColor={black}>
                {t("donate")}
              </FilledButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
