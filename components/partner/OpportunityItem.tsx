import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { typography, breakpoints } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const OpportunityItem: FC = ({ children }) => {
  const [first, ...rest] = children as any[];
  const { outlinedButton, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const image = loadImage(first);

  return (
    <Grid container justifyContent="space-around" className="opportunityItem">
      <Grid
        item
        sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            [ps]: { height: 200 },
            [tl]: { height: "100%" },
            backgroundImage: `url(${image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
      >
        <Box
          sx={{
            px: 5,
            py: 10,
            a: outlinedButton,
            "& p": bodyLarge,
          }}
        >
          {rest}
        </Box>
      </Grid>
    </Grid>
  );
};
