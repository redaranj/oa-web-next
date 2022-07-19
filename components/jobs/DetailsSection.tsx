import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { colors } from "styles/theme";

export const DetailsSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <Box sx={{ backgroundColor: lightGrey, p: 6 }}>
      <Stack spacing={3}>{children}</Stack>
    </Box>
  );
};
