import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Grid, Box, IconButton } from "@mui/material";
import { colors } from "styles/theme";

export const TopNav = () => {
  const { white } = colors;
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split("/")[1];
  const tabs = ["about", "news", "team", "save", "faq", "donate"];
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: white,
        marginBottom: 180,
        opacity: 0.98,
      }}
    >
      <Grid
        item
        sx={{ background: "#999", p: 1 }}
        container
        direction="row"
        justifyContent="center"
      >
        <Grid item>OpenArchive</Grid>
        <Grid
          item
          container
          xs={8}
          alignItems="center"
          justifyContent="space-around"
        >
          {tabs.map((tab) => (
            <Link key={tab} href={`/${tab}`} passHref>
              <Box
                component="a"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  textAlign: "center",
                  borderBottom: tab === path ? "1px solid white" : "none",
                  letterSpacing: 0.7,
                  p: 1,
                }}
              >
                {tab}
              </Box>
            </Link>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
};
