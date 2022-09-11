import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { loadImage } from "lib/frontendHelpers";

export const ServeItem: FC<PropsWithChildren> = ({ children }) => {
  const [first, ...rest] = children as any[];
  const { outlinedButton, bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const { turquoise } = colors;
  const image = loadImage(first);

  return (
    <Grid container justifyContent="space-around" className="serveItem">
      <Grid
        item
        sx={{ width: "50%", [ps]: { width: "100%" }, [ts]: { width: "50%" } }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            [ps]: { height: 200 },
            [ts]: { height: "100%" },
            backgroundImage: `url(${image.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{ width: "50%", [ps]: { width: "100%" }, [ts]: { width: "50%" } }}
      >
        <Box
          sx={{
            px: 5,
            py: 10,
            [ps]: { px: 1, py: 4, pt: 2 },
            [ts]: { px: 5, py: 10 },
            a: outlinedButton,
            ul: { p: 0 },
            "& p": bodyLarge,
            "li::marker": {
              color: turquoise,
              content: "'• '",
              fontSize: "30px",
              lineHeight: "0px",
              m: 0,
              p: 0,
            },
          }}
        >
          {rest}
        </Box>
      </Grid>
    </Grid>
  );
};
