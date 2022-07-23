import { FC } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { breakpoints } from "styles/theme";
import { getImagePath } from "lib/frontendHelpers";

export const PartnerItem: FC = ({ children }) => {
  const { ps, tl } = breakpoints;
  const [first, url, ...rest] = children as any[];
  const image = first.props.children.props.src;
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
        <img src={getImagePath(image)} alt={name} style={{ width: "150px" }} />
      </Link>
    </Grid>
  );
};
