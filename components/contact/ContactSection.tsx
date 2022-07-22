import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import contactHeader from "public/images/contact-header.png";

export const ContactSection: FC = ({ children }) => {
  const { white } = colors;
  const { outlinedButton } = typography;

  return (
    <BaseHeaderSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-between"
        spacing={6}
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${contactHeader.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              a: outlinedButton,
              "> p": { mb: 4 },
              "> h6": { mb: 4 },
              py: 6,
              img: { mr: 2 },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
