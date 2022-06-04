import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import { JobItem } from "components/team/JobItem";
import teamAbout from "images/team-about.png";

export const AboutSection: FC = () => {
  const t = useTranslate();
  const { lightGrey, turquoise } = colors;
  const { h2, h5, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
          }}
        >
          <Grid item>
            <Box
              component="h2"
              sx={{ ...h2, pt: 8 }}
              dangerouslySetInnerHTML={{
                __html: t("aboutOpenArchiveTitle"),
              }}
            />
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...bodyLarge, mb: 3 }}>
              {t("aboutOpenArchiveDescription")}
            </Box>
          </Grid>
          <Grid item>
            <OutlinedButton arrowDirection="right">
              {t("readMore")}
            </OutlinedButton>
          </Grid>
          <Grid item>
            <Box sx={{ ...h5, color: turquoise, mt: 8, mb: 8 }}>
              {t("joinOurTeam")}
            </Box>
          </Grid>
          <Grid item container direction="row" spacing={4}>
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
            <JobItem
              jobTitle="Software Engineer"
              details="Details"
              date={new Date()}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundImage: `url(${teamAbout.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};
