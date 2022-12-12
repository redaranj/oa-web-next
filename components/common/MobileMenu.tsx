import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslate } from "react-polyglot";
import { Box, Button, Grid } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { colors, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";

type MenuItemProps = {
  title: string;
  url: string;
  sx?: any;
};

const MenuItem: FC<MenuItemProps> = ({ title, url, sx = {} }) => {
  const { body } = typography;
  const { white } = colors;
  const itemStyles = { ...body, color: white, mb: 1, ...sx };

  return (
    <Grid item>
      <Link href={url}>
        <Box sx={{ textDecoration: "none" }}>
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
  const router = useRouter();
  const { white, black, turquoise } = colors;
  const { body } = typography;
  const headerStyles = { ...body, fontWeight: 600, color: white, mb: 1 };

  return (
    <Box
      sx={{
        backgroundColor: turquoise,
        color: white,
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        position: "relative",
        p: 3,
      }}
    >
      <Button
        sx={{ position: "absolute", top: 12, right: 4 }}
        onClick={closeMenu}
      >
        <CloseIcon sx={{ color: white }} />
      </Button>
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
          <Grid item container direction="column">
            <Box sx={{ borderTop: `1px solid ${white}`, mt: 3, pt: 3 }}>
              <MenuItem
                title={t("news")}
                url="/news"
                sx={{ fontWeight: 600 }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ width: "100%", mt: 6 }}>
              <FilledButton
                backgroundColor={white}
                textColor={black}
                onClick={() => router.push("/donate")}
              >
                {t("donate")}
              </FilledButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
