import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";

export const ArticleHeaderSection: FC = ({ children }) => {
  const { lightGrey, darkGrey, turquoise } = colors;
  const [first, date, category, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Box sx={{ mb: 10 }}>
      <PageSection backgroundColor={lightGrey}>
        <Grid
          container
          justifyContent="space-around"
          sx={{
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Grid item>
            <Link href="/news">
              <Box
                sx={{
                  a: { textDecoration: "none" },
                  "& p": { fontWeight: "bold" },
                  mb: 3,
                }}
              >
                All news
              </Box>
            </Link>
          </Grid>
          <Grid item container direction="column">
            <Grid item container direction="row" spacing={3} sx={{ mb: 3 }}>
              <Grid item>
                <Box sx={{ color: darkGrey }}>{date}</Box>
              </Grid>
              <Grid item>
                <Box sx={{ color: turquoise }}>{category}</Box>
              </Grid>
            </Grid>
            <Grid item>{title}</Grid>
            <Grid item sx={{ mb: 10, width: "75%" }}>
              {description}
            </Grid>

            <Box
              sx={{
                position: "absolute",
                bottom: "-250px",
                left: "calc(50% - 250px)",
                maxWidth: "500px",
                margin: "0 auto",
                mt: 6,
              }}
            >
              <Image
                src={image}
                alt=""
                loader={loader}
                width="500px"
                height="300px"
              />
            </Box>
          </Grid>
        </Grid>
      </PageSection>
    </Box>
  );
};
