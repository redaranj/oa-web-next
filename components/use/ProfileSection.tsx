import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";
import quotationMark from "public/images/quote.svg";

export const ProfileSection: FC = ({ children }) => {
  const { white, lightGrey, mediumGrey, turquoise } = colors;
  const { bodyLarge } = typography;
  const [first, name, stats, quote, ...details] = children as any[];
  const image = loadImage(first);

  return (
    <>
      <PageSection backgroundColor={white}>
        <Link href="/use">All use cases</Link>
      </PageSection>
      <PageSection backgroundColor={lightGrey}>
        <Grid container direction="column">
          <Grid item container direction="row" wrap="nowrap">
            <Grid item>
              <Box sx={{ width: 300 }}>
                <Image src={image} alt="" loader={loader} />
              </Box>
            </Grid>
            <Grid item container direction="column" sx={{ ml: "20px" }}>
              <Grid item>{name}</Grid>
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
              <Grid item sx={{ mt: 6 }}>
                <Image src={quotationMark} loader={loader} />
                <Box sx={{ mt: 1, "> blockquote": bodyLarge }}>{quote}</Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="row" wrap="nowrap">
            <Grid item>
              <Box sx={{ width: 320 }}> </Box>
            </Grid>
            <Grid item sx={{ mt: 6 }}>
              <Box
                sx={{
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
