import { FC } from "react";
import { Box } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const TestimonialsSection: FC = ({ children }) => {
  const t = useTranslate();
  const { h2 } = typography;
  const { lightGrey } = colors;

  console.log({ children });
  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        component="h2"
        sx={{ ...h2, mb: "60px" }}
        dangerouslySetInnerHTML={{ __html: t("testimonialsTitle") }}
      />
      <HorizontalCarousel>{children}</HorizontalCarousel>
    </PageSection>
  );
};
