import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { loader, breakpoints } from "styles/theme";

type PartnerItemProps = PropsWithChildren<{
  name: string;
  image: StaticImageData;
  url: string;
}>;

export const PartnerItem: FC<PartnerItemProps> = ({ name, image, url }) => {
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
      alignItems="center"
    >
      <Link href={url}>
        <Box
          sx={{
            maxWidth: "300px",
          }}
        >
          <Image src={image} loader={loader} alt={name} />
        </Box>
      </Link>
    </Grid>
  );
};
