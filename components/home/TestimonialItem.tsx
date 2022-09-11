import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

export const TestimonialItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise, darkGrey } = colors;
  const { h6, body } = typography;
  const [quote, name, position, url] = children as any[];
  const { ps, ts } = breakpoints;

  return (
    <Grid
      item
      container
      sx={{
        width: "50%",
        [ps]: { width: "100%" },
        [ts]: { width: "50%" },
      }}
    >
      <Grid
        item
        sx={{
          position: "relative",
          ".quoteBox::before": {
            backgroundColor: white,
            content: "' '",
            display: "block",
            height: "24px",
            width: "24px",
            position: "absolute",
            bottom: "-10px",
            transform: "rotate(47deg) skew(5deg)",
          },
        }}
      >
        <Box
          className="quoteBox"
          sx={{ height: "100%", backgroundColor: white, p: 6 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Grid item>{quote}</Grid>
            <Grid item container direction="row" flexWrap="nowrap" spacing={3}>
              <Grid item container direction="column">
                <Grid item>
                  <Box component="h6" sx={{ ...h6, mb: 2 }}>
                    {name}
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ ...body, "> p": { color: turquoise } }}>
                    {position}
                  </Box>
                  <Box sx={{ ...body, "> p": { color: darkGrey } }}>{url}</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
