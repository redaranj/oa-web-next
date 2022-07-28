import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTranslate } from "react-polyglot";
import { AppBar, Box, Grid, Drawer, Button } from "@mui/material";
import { colors, typography, loader, breakpoints } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { MenuButton } from "components/common/MenuButton";
import { MobileMenu } from "components/common/MobileMenu";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "public/images/open-archive.svg";
// import search from "public/images/search.svg";
import twitter from "public/images/twitter-grey.svg";
import instagram from "public/images/instagram-grey.svg";
import github from "public/images/github-grey.svg";
import menuIcon from "public/images/menu-icon.svg";

export const TopNav = () => {
  const ref = useRef(null);
  const router = useRouter();
  const t = useTranslate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { white, mediumGrey, mediumBurgundy, darkBurgundy, black, turquoise } =
    colors;
  const { body } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const menuItemProps = {
    ...body,
    fontWeight: 600,
    color: white,
    textDecoration: "none",
  };
  const getAnchorRef = () => ref.current;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        opacity: 0.95,
        height: 90,
        [ps]: { height: 50 },
        [ts]: { height: 80 },
        [dl]: { height: 90 },
        p: 0,
        m: 0,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={0}
        sx={{ height: "100%" }}
      >
        <Grid item>
          <Box
            sx={{
              maxWidth: 1920,
              width: "100%",
              px: 11.25,
              [ps]: { px: 3 },
              [pl]: { px: 3 },
              [ts]: { px: 6 },
              [tl]: { px: 6 },
              [ds]: { px: 6.25 },
              [dl]: { px: 11.25 },
            }}
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              flexWrap="nowrap"
              alignItems="center"
              alignContent="center"
            >
              <Grid item sx={{ mt: 0.5 }} xs="auto">
                <Link href="/" passHref>
                  <Box component="a">
                    <Box
                      sx={{
                        width: 200,
                        [ps]: {
                          width: 150,
                        },
                        [ts]: { width: 200 },
                      }}
                    >
                      <Image alt="" src={openArchiveLogo} loader={loader} />
                    </Box>
                  </Box>
                </Link>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                flexWrap="nowrap"
                sx={{
                  display: "flex",
                  [ps]: {
                    display: "none",
                  },
                  [ts]: {
                    display: "flex",
                  },
                }}
              >
                {/*
            <Grid item>
              <Image alt="search" src={search} loader={loader} />
            </Grid> */}
                <Grid
                  ref={ref}
                  item
                  container
                  direction="row"
                  flexWrap="nowrap"
                  spacing={4}
                  xs="auto"
                >
                  <Grid
                    item
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: mediumGrey,
                        height: "100%",
                        width: "1px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="space-around"
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <MenuButton title={t("ourWork")} anchorEl={getAnchorRef}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Link href="/save" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("saveApp")}
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
                        <Grid item>
                          <Link href="/use" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("useCases")}
                            </Box>
                          </Link>
                        </Grid>
                      </Grid>
                    </MenuButton>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <Link href="/news" passHref>
                      <Button
                        sx={{
                          ...body,
                          height: "100%",
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
                      >
                        {t("news")}
                      </Button>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <MenuButton title="About" anchorEl={getAnchorRef}>
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
                        <Grid item>
                          <Link href="/partner" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("partnerWithUs")}
                            </Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/jobs" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("workWithUs")}
                            </Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/contact" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("contactUs")}
                            </Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/faq" passHref>
                            <Box component="a" sx={menuItemProps}>
                              {t("faq")}
                            </Box>
                          </Link>
                        </Grid>
                      </Grid>
                    </MenuButton>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    alignContent="center"
                  >
                    <FilledButton
                      textColor={white}
                      backgroundColor={mediumBurgundy}
                      highlightColor={darkBurgundy}
                      onClick={() => router.push("/donate")}
                    >
                      {t("donate")}
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
                    [ps]: {
                      display: "initial",
                    },
                    [ts]: {
                      display: "none",
                    },
                  }}
                >
                  <Image src={menuIcon} alt="menu" loader={loader} />
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
        </Grid>
      </Grid>
    </AppBar>
  );
};
