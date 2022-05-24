import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TestimonialItem } from "components/home/TestimonialItem";

export const TestimonialsSection: FC = () => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>Testimonials</Grid>
        <Grid item container direction="row">
          <TestimonialItem
            name="Darius"
            position="Google LLC, Freelance Videogrpaher, archivists and librarians"
            quote="In the past I would have transferred data to my laptop and uploaded from there but I wouldn’t do that anymore, Increasing I am using the mobile device. There’s no need to go through the laptop, really."
            image={null}
          />
          <TestimonialItem
            name="Darius"
            position="Google LLC, Freelance Videogrpaher, archivists and librarians"
            quote="In the past I would have transferred data to my laptop and uploaded from there but I wouldn’t do that anymore, Increasing I am using the mobile device."
            image={null}
          />
          <TestimonialItem
            name="Darius"
            position="Google LLC, Freelance Videogrpaher, archivists and librarians"
            quote="In the past I would have transferred data to my laptop and uploaded from there but I wouldn’t do that anymore, Increasing I am using the mobile device. There’s no need to go through the laptop, really."
            image={null}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
