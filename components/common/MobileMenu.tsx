import { FC } from "react";
import { Box, Button, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { OutlinedButton } from "components/common/OutlinedButton";

type MobileMenuProps = {
  closeMenu: any;
};

export const MobileMenu: FC<MobileMenuProps> = ({ closeMenu }) => {
  const { white, turquoise } = colors;

  return (
    <Box sx={{ backgroundColor: turquoise, color: white, height: "100vh" }}>
      <Box sx={{ backgroundColor: white, height: 50 }}>
        <Button onClick={closeMenu}>Close</Button>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "75%" }}
      >
        <Grid item container direction="column">
          <Grid item>Start typing</Grid>
          <Grid item container direction="column">
            <Grid item>Our work</Grid>
            <Grid item>Save</Grid>
            <Grid item>Guides</Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>About</Grid>
            <Grid item>About us</Grid>
            <Grid item>Team</Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <OutlinedButton>Donate</OutlinedButton>
        </Grid>
      </Grid>
    </Box>
  );
};
