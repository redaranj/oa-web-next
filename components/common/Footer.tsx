import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "images/open-archive.svg";
import attribution from "images/attribution.svg";
import nonCommercial from "images/non-commercial.svg";
import shareAlike from "images/share-alike.svg";
import demchco from "images/demchco.svg";
import twitter from "images/twitter-black.svg";
import instagram from "images/instagram-black.svg";
import github from "images/github-black.svg";
import linkedin from "images/linkedin-black.svg";
import youtube from "images/youtube-black.svg";

export const Footer: FC = () => {
  const t = useTranslate();
  const { h6 } = typography;
  const { lightGrey, mediumGrey, turquoise } = colors;
  const { ps, pl, ds } = breakpoints;
  const linkStyles = {
    ...h6,
    "&:hover": { color: turquoise },
    cursor: "pointer",
  };
  const creativeCommonsIconSize = "19px";
  const socialIconSize = "36px";

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          paddingTop: 0,
          paddingBottom: 6,
          flexDirection: "row",
          flexWrap: "nowrap",
          [ps]: {
            flexDirection: "column-reverse",
            flexWrap: "wrap",
          },
          [ds]: {
            flexDirection: "row",
            flexWrap: "nowrap",
          },
        }}
      >
        <Grid
          item
          container
          flexWrap="nowrap"
          sx={{
            width: "40%",
            flexDirection: "column",
            [ps]: {
              flexDirection: "colum",
              width: "100%",
            },
            [pl]: {
              flexDirection: "row",
            },
            [ds]: {
              flexDirection: "column",
              width: "40%",
            },
          }}
          spacing={8}
        >
          <Grid
            item
            container
            direction="row"
            flexWrap="nowrap"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box sx={{ width: 200 }}>
                <Link href="/">
                  <Image
                    alt="OpenArchive logo"
                    src={openArchiveLogo}
                    loader={loader}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              container
              direction="row"
              wrap="nowrap"
              spacing={0}
              sx={{ mt: "-4px" }}
            >
              <Grid item sx={{ m: 0, p: 0 }}>
                <IconLink
                  image={attribution}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Attribution"
                  inset={`-${creativeCommonsIconSize}`}
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={nonCommercial}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Non-Commercial"
                  inset={`-${creativeCommonsIconSize}`}
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={shareAlike}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Share-Alike"
                  inset={`-${creativeCommonsIconSize}`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              "&:hover": {
                filter:
                  "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
              },
            }}
          >
            <Link href="https://demch.co">
              <Image
                alt="Site designed by demch.co"
                src={demchco}
                loader={loader}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              height: "1px",
              width: "100%",
              backgroundColor: mediumGrey,
              mt: 12,
              mb: 4,
              display: "none",
              [ps]: {
                display: "block",
              },
              [ds]: {
                display: "none",
              },
            }}
          />
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "60%",
            flexDirection: "row",
            [ps]: { width: "100%", flexDirection: "column" },
            [pl]: { flexDirection: "row" },
            [ds]: {
              width: "60%",
            },
          }}
        >
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [pl]: { width: "50%" },
            }}
            spacing={3}
          >
            <Grid item>
              <Link href="/work-with-us">
                <Box sx={linkStyles}>{t("workWithUs")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/privacy">
                <Box sx={linkStyles}>{t("termsAndPrivacy")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/conduct">
                <Box sx={linkStyles}>{t("codeOfConduct")}</Box>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: mediumGrey,
                mt: 12,
                mb: 4,
                display: "none",
                [ps]: {
                  display: "block",
                },
                [pl]: {
                  display: "none",
                },
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [pl]: { width: "50%" },
            }}
            justifyContent="space-between"
          >
            <Grid item container direction="row" wrap="nowrap" spacing={2}>
              <Grid item>
                <IconLink
                  image={twitter}
                  size={socialIconSize}
                  url="https://twitter.com/open_archive"
                  alt="Twitter logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={instagram}
                  size={socialIconSize}
                  url="https://instagram.com/open__archive"
                  alt="Instagram logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={github}
                  size={socialIconSize}
                  url="https://github.com/openarchive"
                  alt="Github logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={linkedin}
                  size={socialIconSize}
                  url="https://linkedin.com/openarchive"
                  alt="LinkedIn logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={youtube}
                  size={socialIconSize}
                  url="https://youtube.com/openarchive"
                  alt="YouTube logo"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: mediumGrey,
                  display: "block",
                  [ps]: {
                    display: "none",
                  },
                  [pl]: {
                    display: "block",
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Box
                component="a"
                sx={{ textDecoration: "none" }}
                href="mailto:info@open-archive.org"
              >
                <Box sx={linkStyles}>Contact us</Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
