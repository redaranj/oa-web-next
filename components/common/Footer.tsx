import { FC } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "images/open-archive.svg";
import demchco from "images/demchco.svg";
import twitter from "images/twitter-black.svg";
import instagram from "images/instagram-black.svg";
import github from "images/github-black.svg";
import linkedin from "images/linkedin-black.svg";
import youtube from "images/youtube-black.svg";

export const Footer: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        direction="row"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid item container direction="column" sx={{ width: "33%" }}>
          <Grid item container direction="row">
            <Grid item>
              <Image
                alt="OpenArchive logo"
                src={openArchiveLogo}
                loader={loader}
              />
            </Grid>
            <Grid item container direction="row">
              <Grid item>
                <img
                  alt="Creative Commons Attribution"
                  src="/images/attribution.svg"
                />
              </Grid>
              <Grid item>
                <img
                  alt="Creative Commons Non-Commercial"
                  src="/images/non-commercial.svg"
                />
              </Grid>
              <Grid item>
                <img
                  alt="Creative Commons Share-Alike"
                  src="/images/share-alike.svg"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image
              alt="Site designed by demch.co"
              src={demchco}
              loader={loader}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" sx={{ width: "33%" }}>
          <Grid item>{t("workWithUs")}</Grid>
          <Grid item>{t("termsAndPrivacy")}</Grid>
          <Grid item>{t("codeOfConduct")}</Grid>
        </Grid>
        <Grid item container direction="column" sx={{ width: "33%" }}>
          <Grid item container direction="row">
            <Grid item>
              <IconLink
                image={twitter}
                size="30px"
                url="https://twitter.com/open_archive"
              />
            </Grid>
            <Grid item>
              <IconLink
                image={instagram}
                size="30px"
                url="https://instagram.com/open__archive"
              />
            </Grid>
            <Grid item>
              <IconLink
                image={github}
                size="30px"
                url="https://github.com/openarchive"
              />
            </Grid>
            <Grid item>
              <IconLink
                image={linkedin}
                size="30px"
                url="https://linkedin.com/openarchive"
              />
            </Grid>
            <Grid item>
              <IconLink
                image={youtube}
                size="30px"
                url="https://youtube.com/openarchive"
              />
            </Grid>
          </Grid>
          <Grid item>
            <a href="mailto:info@open-archive.org">info@open-archive.org</a>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
