import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors, loader } from "styles/theme";
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
  const { lightGrey } = colors;
  const creativeCommonsIconSize = "16px";
  const socialIconSize = "24px";

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
            <Image
              alt="Site designed by demch.co"
              src={demchco}
              loader={loader}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" sx={{ width: "33%" }}>
          <Grid item>
            <Link href="/work-with-us">{t("workWithUs")}</Link>
          </Grid>
          <Grid item>
            <Link href="/privacy">{t("termsAndPrivacy")}</Link>
          </Grid>
          <Grid item>
            <Link href="/conduct">{t("codeOfConduct")}</Link>
          </Grid>
        </Grid>
        <Grid item container direction="column" sx={{ width: "33%" }}>
          <Grid item container direction="row">
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
            <a href="mailto:info@open-archive.org">info@open-archive.org</a>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
