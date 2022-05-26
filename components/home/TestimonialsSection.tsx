import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalScrollArea } from "components/common/HorizontalScrollArea";
import { TestimonialItem } from "components/home/TestimonialItem";
import darius from "images/darius.png";

export const TestimonialsSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        direction="column"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={h2}
            dangerouslySetInnerHTML={{ __html: t("testimonialsTitle") }}
          />
        </Grid>
        <HorizontalScrollArea>
          <Grid item container direction="row" spacing={2}>
            <TestimonialItem
              name={t("testimonialDariusName")}
              position={t("testimonialDariusPosition")}
              quote={t("testimonialDariusQuote")}
              image={darius}
            />
            <TestimonialItem
              name={t("testimonialDariusName")}
              position={t("testimonialDariusPosition")}
              quote={t("testimonialDariusQuote")}
              image={darius}
            />
            <TestimonialItem
              name={t("testimonialDariusName")}
              position={t("testimonialDariusPosition")}
              quote={t("testimonialDariusQuote")}
              image={darius}
            />
          </Grid>
        </HorizontalScrollArea>
      </Grid>
    </PageSection>
  );
};
