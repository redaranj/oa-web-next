import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { getImagePath } from "lib/frontendHelpers";

export const OpportunityItem: FC = ({ children }) => {
  const [first, ...rest] = children as any[];
  const image = first.props.children.props.src;

  return (
    <Grid container justifyContent="space-around" className="opportunityItem">
      <Grid item xs={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${getImagePath(image)})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ p: 3 }}>{rest}</Box>
      </Grid>
    </Grid>
  );
};
