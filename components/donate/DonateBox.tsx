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
        ul: { display: "flex", flexWrap: "wrap" },
        li: {
          backgroundColor: lightGrey,
          border: `1px solid ${black}`,
          borderRadius: 10,
          display: "flex",
          p: 3,
          pt: 1,
          pb: 1,
          m: 3,
          textAlign: "center",
          fontWeight: "bold",
          textColor: "bold",
          width: "30%",
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
