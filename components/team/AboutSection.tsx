import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import { JobItem } from "components/team/JobItem";

export const AboutSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2, bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        spacing={8}
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
              sx={h2}
              dangerouslySetInnerHTML={{
                __html: t("aboutOpenArchiveTitle"),
              }}
            />
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              {t("aboutOpenArchiveDescription")}
            </Box>
          </Grid>
          <Grid item>
            <OutlinedButton arrowDirection="right">
              {t("readMore")}
            </OutlinedButton>
          </Grid>
          <Grid item>{t("joinOurTeam")}</Grid>
          <Grid item container direction="row">
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
            backgroundImage: `url()`,
            backgroundSize: "150px",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};
