import { FC } from "react";
import { Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

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
              <img alt="OpenArchive logo" src="/images/open-archive.svg" />
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
            <img alt="Site designed by demch.co" src="/images/demchco.svg" />
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
              <img alt="Twitter logo" src="/images/twitter-black.svg" />
            </Grid>
            <Grid item>
              <img alt="Instagram logo" src="/images/instagram-black.svg" />
            </Grid>
            <Grid item>
              <img alt="Github logo" src="/images/github-black.svg" />
            </Grid>
            <Grid item>
              <img alt="LinkedIn logo" src="/images/linkedin-black.svg" />
            </Grid>
            <Grid item>
              <img alt="YouTube logo" src="/images/youtube-black.svg" />
            </Grid>
          </Grid>
          <Grid item>info@open-archive.org</Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
