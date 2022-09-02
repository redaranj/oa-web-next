import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { OutlinedButton } from "components/common/OutlinedButton";
import { colors, typography, loader, breakpoints } from "styles/theme";
import quotationMark from "public/images/quote.svg";

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
  const { lightGrey, mediumGrey, black } = colors;
  const { h5, h6, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const loadedImage = require(`public/images/${image}`).default;

  return (
    <Link href={path}>
      <Box sx={{ backgroundColor: lightGrey, cursor: "pointer" }}>
        <Grid
          container
          sx={{
            flexDirection: "row",
            flexWrap: "nowrap",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid item flexGrow={0}>
            <Box sx={{ width: 220, m: 6, mr: 2 }}>
              <Image src={loadedImage} alt="" loader={loader} />
            </Box>
          </Grid>
          <Grid
            item
            flexGrow={1}
            sx={{ borderRight: `1px solid ${mediumGrey}`, height: "100%" }}
          >
            <Box sx={{ p: 6 }}>
              <Box component="h5" sx={h5}>
                {name}
              </Box>
              <Box component="h6" sx={h6}>
                {title}
              </Box>
              <Box sx={{ width: 80, mt: 3 }}>
                <Image src={quotationMark} alt="" loader={loader} />
              </Box>
              <Box component="p" sx={bodyLarge}>
                {quote}
              </Box>
            </Box>
          </Grid>
          <Grid item flexGrow={0}>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              alignContent="center"
              sx={{ height: "100%", p: 3 }}
            >
              <Grid
                item
                sx={{
                  width: 200,
                  "> *": { m: 0 },
                  textAlign: "center",
                }}
              >
                <OutlinedButton textColor={black} arrowDirection="right">
                  Learn more
                </OutlinedButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
