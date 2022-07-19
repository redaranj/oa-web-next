import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

type JobItemProps = PropsWithChildren<{
  title: string;
  date: string;
  path: string;
}>;

export const JobItem: FC<JobItemProps> = ({ title, date, path }) => {
  const { h5, bodyLarge } = typography;
  const { white, lightGrey, turquoise } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Link href={path}>
      <Box sx={{ backgroundColor: white }}>
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={0}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid item>
            <Box
              sx={{
                ...bodyLarge,
                color: lightGrey,
                mt: 2,
              }}
            >
              {date}
            </Box>
            <Box
              sx={{
                ...bodyLarge,
                color: turquoise,
                mt: 2,
              }}
            >
              Job Opening
            </Box>
          </Grid>
          <Grid item container direction="column" sx={{ mt: 0, p: 4 }}>
            <Grid item>
              <Box component="h5" sx={h5}>
                {title}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
