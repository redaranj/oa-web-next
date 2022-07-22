import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { OutlinedButton } from "components/common/OutlinedButton";
import { typography, colors, breakpoints } from "styles/theme";

type JobItemProps = PropsWithChildren<{
  title: string;
  date: string;
  path: string;
}>;

export const JobItem: FC<JobItemProps> = ({ title, date, path }) => {
  const { h5, bodyLarge } = typography;
  const { white, mediumGrey, turquoise, black } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Link href={path}>
      <Box sx={{ backgroundColor: white, px: 3, py: 1 }}>
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
          <Grid item sx={{ width: "20%" }}>
            <Box
              sx={{
                ...bodyLarge,
                color: mediumGrey,
                mt: 2,
              }}
            >
              {date}
            </Box>
            <Box
              sx={{
                ...bodyLarge,
                color: turquoise,
                mt: 0,
              }}
            >
              Job Opening
            </Box>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            sx={{ mt: 0, p: 2, width: "65%" }}
          >
            <Grid item>
              <Box component="h5" sx={h5}>
                {title}
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            sx={{ width: "15%", pt: 2 }}
          >
            <OutlinedButton textColor={black} arrowDirection="right">
              More
            </OutlinedButton>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
