import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { breakpoints, loader } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const [first, url, ...rest] = children as any[];
  const image = loadImage(first);
  const name = rest as unknown as string;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
      alignItems="center"
      justifyContent="space-around"
    >
      <Link href={url}>
        <Box sx={{ width: 150 }}>
          <Image src={image} alt={name} loader={loader} />
        </Box>
      </Link>
    </Grid>
  );
};
