import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "public/images/about-header.png";

interface UseCasesSectionProps {
  pages: any[];
}

export const UseCasesSection: FC<UseCasesSectionProps> = ({ pages }) => {
  const { turquoise } = colors;

  return (
    <PageSection backgroundColor={turquoise} backgroundImage={aboutHeader}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          minHeight: "35vh",
        }}
      >
        {pages.map(({ title, path }) => (
          <Grid item key={path}>
            {title}
          </Grid>
        ))}
      </Grid>
    </PageSection>
  );
};
