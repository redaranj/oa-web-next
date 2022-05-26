import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, loader } from "styles/theme";
import plus from "images/plus.svg";
import quote from "images/quote.svg";

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
            {name} <Image src={plus} loader={loader} />
          </Grid>
          <Grid item>{profile}</Grid>
          <Grid item>
            <Image src={quote} loader={loader} />
            {description}
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
