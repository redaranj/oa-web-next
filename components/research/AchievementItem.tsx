import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const AchievementItem: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const [first, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Grid
      item
      sx={{ width: "33%", [ps]: { width: "100%" }, [ts]: { width: "33%" } }}
    >
      <Box sx={{ backgroundColor: white }}>
        <Box sx={{ width: 60, mb: 2 }}>
          <Image src={image} alt="" loader={loader} />
        </Box>
        <Box>{title}</Box>
        <Box sx={{ "> p": bodyLarge, li: { ...bodyLarge, mb: 1 } }}>
          {description}
        </Box>
      </Box>
    </Grid>
  );
};
