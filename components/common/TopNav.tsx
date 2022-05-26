import Image from "next/image";
import { AppBar, Grid, Container } from "@mui/material";
import { colors, loader } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { MenuButton } from "components/common/MenuButton";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "images/open-archive.svg";
import search from "images/search.svg";
import twitter from "images/twitter-grey.svg";
import instagram from "images/instagram-grey.svg";
import github from "images/github-grey.svg";

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
            <Image alt="" src={openArchiveLogo} loader={loader} />
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
              <Image alt="search" src={search} loader={loader} />
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
                <MenuButton>Our work</MenuButton>
              </Grid>
              <Grid item>
                <MenuButton>About</MenuButton>
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
                <IconLink
                  image={twitter}
                  size="24px"
                  url="https://twitter.com/open_archive"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={instagram}
                  size="24px"
                  url="https://instagram.com/open__archive"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={github}
                  size="24px"
                  url="https://github.com/openarchive"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
