import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TestimonialItem } from "components/home/TestimonialItem";

export const TestimonialsSection: FC = () => {
  const t = useTranslate();
  const { h1 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h1"
            sx={h1}
            dangerouslySetInnerHTML={{ __html: t("testimonialsTitle") }}
          />
        </Grid>
        <Grid item container direction="row">
          <TestimonialItem
            name={t("testimonialDariusName")}
            position={t("testimonialDariusPosition")}
            quote={t("testimonialDariusQuote")}
            image={null}
          />
          <TestimonialItem
            name={t("testimonialDariusName")}
            position={t("testimonialDariusPosition")}
            quote={t("testimonialDariusQuote")}
            image={null}
          />
          <TestimonialItem
            name={t("testimonialDariusName")}
            position={t("testimonialDariusPosition")}
            quote={t("testimonialDariusQuote")}
            image={null}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
