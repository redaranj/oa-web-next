import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors, breakpoints } from "styles/theme";

export const DonateBox: FC<PropsWithChildren> = ({ children }) => {
  const { mediumBurgundy, darkBurgundy, turquoise, black, lightGrey, white } =
    colors;
  const { ps, ts } = breakpoints;

  return (
    <Box
      sx={{
        maxWidth: 500,
        m: "0 auto",
        backgroundColor: lightGrey,
        p: 3,
        ul: {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "flex-start",
          p: 0,
        },
        li: {
          backgroundColor: lightGrey,
          border: `1px solid ${black}`,
          borderRadius: 10,
          display: "flex",
          px: 3,
          py: 1,
          m: 1,
          textAlign: "center",
          fontWeight: "bold",
          textColor: "bold",
          width: "29%",
          [ps]: { width: "40%" },
          [ts]: { width: "29%" },
          cursor: "pointer",
          "&:hover": {
            backgroundColor: turquoise,
            border: `1px solid ${turquoise}`,
            color: white,
          },
        },
        "li em": {
          fontStyle: "normal",
          textAlign: "center",
          display: "block",
          width: "100%",
        },
        a: {
          backgroundColor: mediumBurgundy,
          textDecoration: "none",
          textAlign: "center",
          fontWeight: "bold",
          color: white,
          borderRadius: 10,
          px: 3,
          py: 1,
          m: 0,
          mb: 2,
          display: "block",
          width: "100%",
          "&:hover": {
            backgroundColor: darkBurgundy,
            color: white,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};
