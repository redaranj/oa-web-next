import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";
import staff from "public/images/staff.svg";

export const TeamItem: FC = ({ children }) => {
  const { lightGrey, black } = colors;
  const { bodyLarge } = typography;

  const { ps, tl } = breakpoints;

  return (
    <Link href="/team">
      <Box
        sx={{
          backgroundColor: lightGrey,
          mb: 8,
          p: 6,
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${staff.src})`,
                backgroundSize: "75%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Box sx={{ pl: 6, pb: 2, "> p": bodyLarge }}>{children}</Box>
            <Box sx={{ pl: 6, maxWidth: "50%" }}>
              <Link href="/team">
                <OutlinedButton textColor={black} arrowDirection="right">
                  Learn more
                </OutlinedButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
