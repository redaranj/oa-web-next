import { FC } from "react";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProfileSection: FC = ({ children }) => {
  const { white, lightGrey, mediumGrey, turquoise } = colors;
  const [image, name, title, quote, stats, ...details] = children as any[];

  return (
    <>
      <PageSection backgroundColor={white}>
        <Link href="/use">All use cases</Link>
      </PageSection>
      <PageSection backgroundColor={lightGrey}>
        <Grid container direction="column">
          <Grid item container direction="row" wrap="nowrap">
            <Grid item>
              <Box sx={{ width: 300 }}>{image}</Box>
            </Grid>
            <Grid item container direction="column" sx={{ ml: "20px" }}>
              <Grid item>{name}</Grid>
              <Grid item>{title}</Grid>
              <Grid item>{quote}</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                table: { borderCollapse: "collapse", borderSpacing: 0 },
                tr: {
                  borderTop: `1px solid ${mediumGrey}`,
                },
                td: { py: 2 },
                "td:nth-of-type(odd)": {
                  color: turquoise,
                  fontWeight: "bold",
                  minWidth: 320,
                },
              }}
            >
              {stats}
            </Box>
          </Grid>
          <Grid item container direction="row" wrap="nowrap">
            <Grid item>
              <Box sx={{ width: 320 }}> </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  mt: 6,
                  backgroundColor: white,
                  p: 3,
                  "td:nth-of-type(odd)": { textAlign: "center" },
                  "td:nth-of-type(even)": { p: 2 },
                }}
              >
                {details}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PageSection>
    </>
  );
};
