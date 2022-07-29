import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";
import { breakpoints, loader } from "styles/theme";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const [first, url, ...rest] = children as any[];
  const image =
    require(`public/images/${first.props.children.props.src}`).default;
  const name = rest as unknown as string;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{ width: "33%", [ps]: { width: "100%" }, [tl]: { width: "33%" } }}
      alignItems="center"
      justifyContent="space-around"
    >
      <Link href={url}>
        <Image src={image} alt={name} width={150} loader={loader} />
      </Link>
    </Grid>
  );
};
