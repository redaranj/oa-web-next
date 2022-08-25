import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";

export const ArticleHeaderSection: FC = ({ children }) => {
  const router = useRouter();
  const pathComponents = router.pathname.split("/");
  const section = pathComponents.at(-2);
  const { lightGrey, darkGrey, turquoise } = colors;
  const { bodyLarge } = typography;
  const [first, date, category, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Box sx={{ mb: 16 }}>
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
            <Link href={`/${section}`}>
              <Box
                sx={{
                  a: { textDecoration: "none" },
                  "& p": { fontWeight: "bold" },
                  mt: 3,
                  mb: 3,
                }}
              >
                All {section}
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
              <Box
                sx={{
                  "& p": bodyLarge,
                }}
              >
                {description}
              </Box>
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
