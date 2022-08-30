import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { JobItem } from "components/jobs/JobItem";

type JobsSectionProps = {
  pages: any[];
};

export const JobsSection: FC<JobsSectionProps> = ({ pages, children }) => {
  const { lightGrey } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;

  return (
    <PageSection
      backgroundColor={lightGrey}
      sx={{
        py: 8,
        px: 11.25,
        [ps]: {
          py: 2,
          px: 3,
        },
        [pl]: {
          py: 2,
          px: 3,
        },
        [ts]: {
          py: 5,
          px: 4.375,
        },
        [tl]: {
          py: 5,
          px: 4.375,
        },
        [ds]: {
          py: 8,
          px: 6.25,
        },
        [dl]: {
          py: 8,
          px: 11.25,
        },
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box>{children}</Box>
        </Grid>
        {pages.map((page: any) => (
          <JobItem key={page.path} {...page} />
        ))}
      </Grid>
    </PageSection>
  );
};
