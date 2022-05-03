import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Grid, Box, IconButton } from "@mui/material";

export const TopBar = () => {
  const router = useRouter();
  const {
    asPath,
    query: { embedded },
  } = router;
  console.log({ embedded });
  const path = asPath.split("/")[1];
  const tabs = ["about", "news", "team", "save", "faq", "donate"];
  return (
    <Grid
      item
      sx={{ background: "#999", p: 1 }}
      container
      direction="row"
      justifyContent="center"
    >
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
  );
};
