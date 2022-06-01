import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslate } from "react-polyglot";
import { AppBar, Box, Grid, Drawer, Button } from "@mui/material";
import { colors, typography, loader, breakpoints } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { MenuButton } from "components/common/MenuButton";
import { MobileMenu } from "components/common/MobileMenu";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "images/open-archive.svg";
// import search from "images/search.svg";
import twitter from "images/twitter-grey.svg";
import instagram from "images/instagram-grey.svg";
import github from "images/github-grey.svg";

export const TopNav = () => {
  const t = useTranslate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { white, mediumGrey, mediumBurgundy } = colors;
  const { body } = typography;
  const { phoneSmall, tabletSmall } = breakpoints;
  const menuItemProps = { ...body, fontWeight: 600, color: white };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: white,
        marginBottom: 180,
        opacity: 0.95,
        pl: 6,
        pt: 2,
        pr: 6,
        pb: 2,
        [phoneSmall]: { pl: 3, pt: 1, pr: 3, pb: 1 },
        [tabletSmall]: { pl: 6, pt: 2, pr: 6, pb: 2 },
      }}
    >
      <Box
        sx={{
          margin: "auto",
          maxWidth: 1920,
          width: "100%",
        }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          flexWrap="nowrap"
          alignItems="center"
        >
          <Grid item sx={{ mt: "4px" }} xs="auto">
            <Link href="/" passHref>
              <Box component="a">
                <Image alt="" src={openArchiveLogo} loader={loader} />
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            flexWrap="nowrap"
            sx={{
              display: "flex",
              [phoneSmall]: {
                display: "none",
              },
              [tabletSmall]: {
                display: "flex",
              },
            }}
          >
            {/*
            <Grid item>
              <Image alt="search" src={search} loader={loader} />
            </Grid> */}
            <Grid
              item
              container
              direction="row"
              flexWrap="nowrap"
              spacing={4}
              xs="auto"
            >
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: mediumGrey,
                    height: "100%",
                    width: "1px",
                  }}
                />
              </Grid>
              <Grid item>
                <MenuButton title={t("ourWork")}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Link href="/save" passHref>
                        <Box component="a" sx={menuItemProps}>
                          {t("save")}
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/guides" passHref>
                        <Box component="a" sx={menuItemProps}>
                          {t("guides")}
                        </Box>
                      </Link>
                    </Grid>
                  </Grid>
                </MenuButton>
              </Grid>
              <Grid item>
                <MenuButton title="About">
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Link href="/about" passHref>
                        <Box component="a" sx={menuItemProps}>
                          {t("aboutUs")}
                        </Box>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/team" passHref>
                        <Box component="a" sx={menuItemProps}>
                          {t("team")}
                        </Box>
                      </Link>
                    </Grid>
                  </Grid>
                </MenuButton>
              </Grid>
              <Grid item>
                <FilledButton
                  textColor={white}
                  backgroundColor={mediumBurgundy}
                >
                  Donate
                </FilledButton>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: mediumGrey,
                    height: "100%",
                    width: "1px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              flexWrap="nowrap"
              xs="auto"
              spacing={0}
              sx={{ ml: "32px" }}
            >
              <Grid item>
                <IconLink
                  image={twitter}
                  size="24px"
                  url="https://twitter.com/open_archive"
                  alt="Twitter logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={instagram}
                  size="24px"
                  url="https://instagram.com/open__archive"
                  alt="Instagram logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={github}
                  size="24px"
                  url="https://github.com/openarchive"
                  alt="Github logo"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: "none",
                [phoneSmall]: {
                  display: "initial",
                },
                [tabletSmall]: {
                  display: "none",
                },
              }}
            >
              menu
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MobileMenu closeMenu={() => setDrawerOpen(false)} />
      </Drawer>
    </AppBar>
  );
};
