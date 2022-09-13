import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import donate2 from "public/images/donate-3.png";

export const DonateSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, darkBurgundy, mediumBurgundy } = colors;
  const { ps, ts } = breakpoints;
  const [title, button, ...rest] = children as any;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-around"
        spacing={6}
        sx={{
          mt: 2,
          flexDirection: "row",
          [ps]: { flexDirection: "column", mt: 0 },
          [ts]: { flexDirection: "row", mt: 0 },
        }}
      >
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          <Image src={donate2} alt="" loader={loader} />
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
            pt: 10,
          }}
        >
          {title}
          <Box
            sx={{
              a: {
                backgroundColor: mediumBurgundy,
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                color: white,
                borderRadius: 10,
                px: 3,
                py: 1,
                m: 0,
                mb: 2,
                display: "block",
                maxWidth: 200,
                "&:hover": {
                  backgroundColor: darkBurgundy,
                  color: white,
                },
              },
            }}
          >
            {button}
          </Box>
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
