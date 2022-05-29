import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";

type PartnerItemProps = PropsWithChildren<{
  name: string;
  image: StaticImageData;
  url: string;
}>;

export const PartnerItem: FC<PartnerItemProps> = ({ name, image, url }) => {
  const { white } = colors;
  const { bodyLarge } = typography;

  return (
    <Grid item container direction="column" sx={{ width: "25%" }}>
      <Link href={url}>
        <Box sx={{ backgroundColor: white }}>
          <Grid item>
            <Box
              sx={{
                height: "400px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
              }}
            >
              <Box sx={{ ...bodyLarge, color: white }}>{name}</Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
