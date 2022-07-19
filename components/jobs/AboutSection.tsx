import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const AboutSection: FC = () => {
  const { lightGrey } = colors;
  const { h2, body } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          {" "}
        </Grid>
        <Grid item xs={6}>
          <Box component="h2" sx={h2}>
            About <strong>OpenArchive</strong>
          </Box>
          <Box component="p" sx={body}>
            OpenArchive is an experienced research and development nonprofit
            organization dedicated to the ethical collection and long-term
            preservation of mobile media. We work to promote freedom of
            expression and privacy on the internet by creating tools, guides,
            and workshops to protect human rights defenders and their media. Our
            work centers both large human rights focused NGOs as well as
            activist communities, researchers, designers, developers, academic
            institutions, and advocates to create and share best practices in
            order to advance secure, long-term mobile media preservation and
            internet freedom for marginalized and targeted communities.
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
