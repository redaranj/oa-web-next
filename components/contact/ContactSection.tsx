import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import ContactHeader from "public/images/contact-header.png";

export const ContactSection: FC = ({ children }) => {
  const { white } = colors;
  const { outlinedButton } = typography;

  return (
    <BaseHeaderSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            backgroundImage: `url(${ContactHeader.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {" "}
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ a: outlinedButton }}>{children}</Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
