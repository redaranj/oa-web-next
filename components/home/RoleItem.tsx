import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { getURL, loadImage } from "lib/frontendHelpers";

export const RoleItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;
  const [first, title, link] = children as any[];
  const image = loadImage(first);
  const href = getURL(link);

  return (
    <Grid
      item
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Link href={href}>
        <Box
          sx={{
            cursor: "pointer",
            h5: { color: white },
            p: 6,
            height: "100%",
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            ":hover": {
              background: `linear-gradient(to top, ${turquoise}bb, ${turquoise}bb), url(${image.src}) center / cover`,
            },
          }}
        >
          {title}
        </Box>
      </Link>
    </Grid>
  );
};
