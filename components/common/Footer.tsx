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
  const { lightGrey } = colors;
  const { ps, ts } = breakpoints;
  const creativeCommonsIconSize = "19px";
  const socialIconSize = "36px";

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          paddingTop: 16,
          paddingBottom: 16,
          flexDirection: "row",
          flexWrap: "nowrap",
          [ps]: {
            flexDirection: "row-reverse",
            flexWrap: "wrap",
          },
          [ts]: {
            flexDirection: "row",
            flexWrap: "nowrap",
          },
        }}
      >
        <Grid
          item
          container
          sx={{
            width: "40%",
            flexDirection: "column",
            [ps]: {
              flexDirection: "row",
              width: "100%",
            },
            [ts]: {
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
                  />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={0}
              sx={{ mt: "-4px" }}
            >
              <Grid item>
                <IconLink
                  image={attribution}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Attribution"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={nonCommercial}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Non-Commercial"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={shareAlike}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Share-Alike"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Link href="https://demch.co">
              <Image
                alt="Site designed by demch.co"
                src={demchco}
                loader={loader}
              />
            </Link>
          </Grid>
        </Grid>
        <Grid item container direction="row" sx={{ width: "60%" }}>
          <Grid
            item
            container
            direction="column"
            sx={{ width: "50%" }}
            spacing={3}
          >
            <Grid item>
              <Link href="/work-with-us">
                <Box sx={h6}>{t("workWithUs")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/privacy">
                <Box sx={h6}>{t("termsAndPrivacy")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/conduct">
                <Box sx={h6}>{t("codeOfConduct")}</Box>
              </Link>
            </Grid>
          </Grid>
          <Grid item container direction="column" sx={{ width: "50%" }}>
            <Grid item container direction="row" spacing={2}>
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
              <a href="mailto:info@open-archive.org">
                <Box sx={{ ...h6, mt: 7 }}>info@open-archive.org</Box>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
