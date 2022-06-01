import { FC, PropsWithChildren, useRef } from "react";
// import Image from "next/image";
import { Grid } from "@mui/material";
import { breakpoints } from "styles/theme";
// import back from "images/back.svg";
// import forward from "images/forward.svg";

type HorizontalScrollAreaProps = PropsWithChildren<{
  columnOnMobile?: boolean;
}>;

// const { mediumGrey } = colors;

export const HorizontalScrollArea: FC<HorizontalScrollAreaProps> = ({
  columnOnMobile = false,
  children,
}) => {
  const scrollRef = useRef();
  const { phoneSmall, tabletSmall } = breakpoints;

  return (
    <Grid container direction="column">
      <Grid
        ref={scrollRef}
        item
        container
        spacing={6}
        wrap="nowrap"
        sx={{
          overflowX: "scroll",
          maxWidth: "100vw",
          width: "100vw",
          flexDirection: "row",
          [phoneSmall]: { flexDirection: columnOnMobile ? "column" : "row" },
          [tabletSmall]: { flexDirection: "row" },
        }}
      >
        {children}
      </Grid>
      {/*
      <Grid item container direction="row" spacing={2}>
        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <Button onClick={scrollPrevious}>
              <Image src={back} loader={loader} />
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={scrollNext}>
              <Image src={forward} loader={loader} />
            </Button>
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
          */}
    </Grid>
  );
};
