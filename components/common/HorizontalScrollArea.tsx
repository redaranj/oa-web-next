import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader } from "styles/theme";
import back from "images/back.svg";
import forward from "images/forward.svg";

type HorizontalScrollAreaProps = PropsWithChildren<{}>;

const { mediumGrey } = colors;

export const HorizontalScrollArea: FC<HorizontalScrollAreaProps> = ({
  children,
}) => (
  <Grid container direction="column">
    <Grid item sx={{ pb: 5 }}>
      {children}
    </Grid>
    <Grid item container direction="row" spacing={2}>
      <Grid item container direction="row" spacing={2}>
        <Grid item>
          <Image src={back} loader={loader} />
        </Grid>
        <Grid item>
          <Image src={forward} loader={loader} />
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
