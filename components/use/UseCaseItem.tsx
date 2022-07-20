import { FC } from "react";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";

type UseCaseItemProps = {
  name: string;
  title: string;
  quote: string;
  image: string;
  path: string;
};

export const UseCaseItem: FC<UseCaseItemProps> = ({
  name,
  title,
  quote,
  image,
  path,
}) => {
  const { lightGrey } = colors;
  const { h5, h6, bodyLarge } = typography;

  return (
    <Link href={path}>
      <Box sx={{ backgroundColor: lightGrey, p: 6 }}>
        <Grid container direction="row" wrap="nowrap" spacing={3}>
          <Grid item flexGrow={0}>
            <img src={`images/${image}`} />
          </Grid>
          <Grid item flexGrow={1}>
            <Box component="h5" sx={h5}>
              {name}
            </Box>
            <Box component="h6" sx={h6}>
              {title}
            </Box>
            <Box component="p" sx={bodyLarge}>
              {quote}
            </Box>
          </Grid>
          <Grid item flexGrow={0}>
            {" "}
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
