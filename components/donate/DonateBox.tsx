import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";

export const DonateBox: FC = ({ children }) => {
  const { mediumBurgundy, black, lightGrey } = colors;

  return (
    <Box
      sx={{
        backgroundColor: lightGrey,
        p: 3,
        ul: {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "flex-start",
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
          width: "25%",
        },
        "li strong": {
          backgroundColor: "purple",
          fontStyle: "normal",
          textAlign: "center",
          display: "block",
          width: "100%",
        },
        a: {
          backgroundColor: mediumBurgundy,
          borderRadius: 10,
          padding: 3,
          margin: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};
