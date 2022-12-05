import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import contactUs from "public/images/ContactUs/contact-us-1.png"; 

export const ContactSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { outlinedButton, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
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
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              [ps]: { height: 200 },
              [tl]: { height: "100%" },
              backgroundImage: `url(${contactUs.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
        >
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
