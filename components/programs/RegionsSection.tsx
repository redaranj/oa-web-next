import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints, loader } from "styles/theme";
import northAmerica from "public/images/northamerica.png";
import latinAmerica from "public/images/latam.png";
import easternEurope from "public/images/easterneurope.png";
import mena from "public/images/mena.png";

type RegionItemProps = {
  image: StaticImageData;
  name: string;
  url: string;
};

const RegionItem: FC<RegionItemProps> = ({ image, name, url }) => {
  const { ps, ts } = breakpoints;
  const { h5 } = typography;
  const { lightGrey } = colors;

  return (
    <Grid
      item
      sx={{
        "> a": {
          textDecoration: "none",
        },
        ":hover": {
          backgroundColor: lightGrey,
        },
        borderRadius: 2,
        width: "50%",
        [ps]: { width: "100%" },
        [ts]: { width: "50%" },
      }}
    >
      <Link href={url}>
        <Grid container direction="column" justifyContent="center">
          <Grid item>
            <Box sx={{ width: "100%", height: "100%", cursor: "pointer" }}>
              <Image src={image} alt={name} loader={loader} />
            </Box>
          </Grid>
          <Grid item>
            <Box
              component="h5"
              sx={{
                ...h5,
                textAlign: "center",
                maxWidth: 300,
                margin: "0 auto",
                mt: -2,
                cursor: "pointer",
              }}
            >
              {name}
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export const RegionsSection: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;

  return (
    <Grid container direction="column" sx={{ mb: 8 }}>
      <Grid item>
        <Box sx={{ "> p": bodyLarge }}>{children}</Box>
      </Grid>
      <Grid
        item
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <RegionItem
          image={northAmerica}
          name="North America"
          url="/programs/our-users/northamerica"
        />
        <RegionItem
          image={latinAmerica}
          name="Latin America"
          url="/programs/our-users/latam"
        />
        <RegionItem
          image={easternEurope}
          name="Eastern Europe"
          url="/programs/our-users/easterneurope"
        />
        <RegionItem
          image={mena}
          name="Middle East and North Africa"
          url="/programs/our-users/mena"
        />
      </Grid>
    </Grid>
  );
};
