import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslate } from "react-polyglot";
import { Box, Button, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import rightArrow from "public/images/right-arrow.svg";

type MenuItemProps = {
  title: string;
  url: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, url }) => {
  const { body } = typography;
  const { white } = colors;

  return (
    <Grid item>
      <Link href={url} passHref>
        <Box component="a">
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <Box>
                <Image src={rightArrow} alt="" loader={loader} />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ ...body, fontWeight: 600, color: white }}>{title}</Box>
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
        sx={{ height: "75%", p: 4 }}
      >
        <Grid item container direction="column" spacing={6}>
          <Grid item container direction="column">
            <Grid item>{t("ourWork")}</Grid>
            <MenuItem title={t("save")} url="/save" />
            <MenuItem title={t("guides")} url="/guides" />
          </Grid>
          <Grid item container direction="column">
            <Grid item>{t("about")}</Grid>
            <MenuItem title={t("aboutUs")} url="/about" />
            <MenuItem title={t("team")} url="/team" />
          </Grid>
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%" }}>
            <FilledButton backgroundColor={white} textColor={black}>
              {t("donate")}
            </FilledButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
