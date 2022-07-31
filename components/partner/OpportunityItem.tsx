import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const OpportunityItem: FC = ({ children }) => {
  const [first, ...rest] = children as any[];
  const { turquoise } = colors;
  const image = loadImage(first);

  return (
    <Grid container justifyContent="space-around" className="opportunityItem">
      <Grid item xs={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            px: 5,
            py: 10,
            ul: { p: 0, listStyle: "none" },
            "ul li::before": {
              content: "'•'",
              color: turquoise,
              fontWeight: "bold",
              display: "inline-block",
              width: "10px",
              m: 0,
            },
          }}
        >
          {rest}
        </Box>
      </Grid>
    </Grid>
  );
};
