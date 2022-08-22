import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import contactUs from "public/images/contact-us.png";

export const ContactSection: FC = ({ children }) => {
  const { white } = colors;
  const { outlinedButton, bodyLarge } = typography;
  const rest = (children as any[]).slice(0, -1);
  const last = (children as any[]).slice(-1);

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
              backgroundImage: `url(${contactUs.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              a: {
                "&:hover": {
                  background: "none",
                  filter:
                    "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                },
              },
              "> p": { ...bodyLarge, mb: 6 },
              "> h6": { mb: 4 },
              pt: 6,
              img: { pr: "10px !important" },
            }}
          >
            {rest}
          </Box>
          <Box
            sx={{
              a: {
                ...outlinedButton,
              },
            }}
          >
            {last}
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
