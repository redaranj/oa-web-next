import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { loadImage } from "lib/frontendHelpers";

export const OpportunityItem: FC = ({ children }) => {
  const [first, ...rest] = children as any[];
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
        <Box sx={{ px: 5, py: 10 }}>{rest}</Box>
      </Grid>
    </Grid>
  );
};
