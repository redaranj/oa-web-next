import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

type HorizontalScrollAreaProps = PropsWithChildren<{}>;

const { mediumGrey } = colors;

export const HorizontalScrollArea: FC<HorizontalScrollAreaProps> = ({
  children,
}) => (
  <Grid container direction="column">
    <Grid item>{children}</Grid>
    <Grid item container direction="row" spacing={2}>
      <Grid item container direction="row" spacing={2}>
        <Grid item>
          <img src="/images/back.svg" />
        </Grid>
        <Grid item>
          <img src="/images/forward.svg" />
        </Grid>
      </Grid>
      <Grid item>
        <Box
          sx={{
            flex: "flex-grow",
            backgroundColor: mediumGrey,
            width: "100%",
            height: "1px",
          }}
        />
      </Grid>
    </Grid>
  </Grid>
);
