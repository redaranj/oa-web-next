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
            <Grid item container direction="column">
              <Grid item>{name}</Grid>
              <Grid item>{title}</Grid>
              <Grid item>{quote}</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                table: { borderCollapse: "collapse" },
                tr: { borderTop: `1px solid ${mediumGrey}` },
                td: { minWidth: 300 },
                "td:nth-of-type(odd)": { color: turquoise, fontWeight: "bold" },
              }}
            >
              {stats}
            </Box>
          </Grid>
          <Grid item sx={{ ul: { listStyle: "none" } }}>
            {details}
          </Grid>
        </Grid>
      </PageSection>
    </>
  );
};
