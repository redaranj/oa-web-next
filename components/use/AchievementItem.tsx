import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader, typography } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const AchievementItem: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const [first, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Grid item xs={4}>
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
