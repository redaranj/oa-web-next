import { FC } from "react";
import { Box } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";
import { TestimonialItem } from "components/common/TestimonialItem";
import darius from "images/darius.png";

export const TestimonialsSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        component="h2"
        sx={{ ...h2, mb: "60px" }}
        dangerouslySetInnerHTML={{ __html: t("testimonialsTitle") }}
      />
      <HorizontalCarousel>
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
      </HorizontalCarousel>
    </PageSection>
  );
};
