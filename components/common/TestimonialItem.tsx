import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";

export const TestimonialItem: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { h6, body } = typography;
  const [quote, name, position, url] = children as any[];

  return (
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
        sx={{ height: "100%", backgroundColor: white, p: 3 }}
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
                <Box component="h6" sx={{ ...h6, mt: "-4px" }}>
                  {name}
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ ...body, "> p": { color: turquoise } }}>
                  {position}
                </Box>
                <Box>{url}</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
