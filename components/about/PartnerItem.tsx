import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { breakpoints } from "styles/theme";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const [image, url, ...rest] = children as any[];
  const name = rest as unknown as string;

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
          <img src={`/images${image}`} alt={name} />
        </Box>
      </Link>
    </Grid>
  );
};
