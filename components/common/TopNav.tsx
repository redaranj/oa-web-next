import Image from "next/image";
import { AppBar, Grid, Container } from "@mui/material";
import { colors } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { NavButton } from "components/common/NavButton";
import openArchiveLogo from "images/open-archive.svg";
import search from "images/search.svg";

export const TopNav = () => {
  const { white, lightGrey, mediumBurgundy } = colors;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: white,
        marginBottom: 180,
        opacity: 0.95,
        p: 1,
      }}
    >
      <Container
        sx={{
          maxWidth: 1920,
        }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          flexWrap="nowrap"
        >
          <Grid item sx={{ width: "50%" }}>
            <Image alt="" src={openArchiveLogo} width={200} />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="space-around"
            flexWrap="nowrap"
            sx={{ width: "50%" }}
          >
            <Grid item>
              <Image src={search} width={20} />
            </Grid>
            <Grid
              item
              container
              direction="row"
              flexWrap="nowrap"
              spacing={2}
              sx={{
                borderLeft: `1px solid ${lightGrey}`,
                borderRight: `1px solid ${lightGrey}`,
              }}
            >
              <Grid item>
                <NavButton>Our work</NavButton>
              </Grid>
              <Grid item>
                <NavButton>About</NavButton>
              </Grid>
              <Grid item>
                <FilledButton
                  textColor={white}
                  backgroundColor={mediumBurgundy}
                >
                  Donate
                </FilledButton>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              flexWrap="nowrap"
              spacing={2}
              sx={{
                svg: {
                  color: "red !important",
                },
              }}
            >
              <Grid item>
                <img src="/images/twitter-grey.svg" />
              </Grid>
              <Grid item>
                <img src="/images/instagram-grey.svg" />
              </Grid>
              <Grid item>
                <img src="/images/github-grey.svg" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
