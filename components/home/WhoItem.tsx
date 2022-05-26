import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

type WhoItemProps = PropsWithChildren<{
  name: string;
  profile: string;
  description: string;
  url: string;
  image: string;
}>;

export const WhoItem: FC<WhoItemProps> = ({
  name,
  profile,
  description,
  url,
  image,
}) => {
  const { lightGrey } = colors;

  return (
    <Link href={url}>
      <Grid item container direction="row" sx={{ width: "50%" }}>
        <Grid
          item
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              backgroundColor: lightGrey,
              backgroundImage: `url(/images/${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid container item sx={{ width: "50%", backgroundColor: lightGrey }}>
          <Grid item>
            {name} <img src="/images/plus.svg" />
          </Grid>
          <Grid item>{profile}</Grid>
          <Grid item>
            <img src="/images/quote.svg" />
            {description}
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
