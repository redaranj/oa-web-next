import { FC } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import northAmerica from "public/images/north-america.png";
import latinAmerica from "public/images/latin-america.png";
import easternEurope from "public/images/eastern-europe.png";
import mena from "public/images/mena.png";

type RegionItemProps = {
  image: StaticImageData;
  name: string;
};

const RegionItem: FC<RegionItemProps> = ({ image, name }) => {
  const { ps, ts } = breakpoints;

  return (
    <Grid
      item
      sx={{
        width: "25%",
        [ps]: { width: "100%" },
        [ts]: { width: "25%" },
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image src={image} alt={name} loader={loader} />
      </Box>
    </Grid>
  );
};

export const RegionsSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <RegionItem image={northAmerica} name="North America" />
        <RegionItem image={latinAmerica} name="Latin America" />
        <RegionItem image={easternEurope} name="Eastern Europe" />
        <RegionItem image={mena} name="Middle East and North America" />
      </Grid>
    </PageSection>
  );
};
