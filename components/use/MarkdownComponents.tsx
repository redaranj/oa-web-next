import { Box } from "@mui/material";
import { typography } from "styles/theme";

const { h1, h2, body } = typography;

export const MarkdownComponents = {
  h1: ({ children }) => (
    <Box
      component="h1"
      sx={{
        ...h1,
      }}
    >
      {children}
    </Box>
  ),
  h2: ({ children }) => (
    <Box
      component="h2"
      sx={{
        ...h2,
      }}
    >
      {children}
    </Box>
  ),
  p: ({ children }) => (
    <Box
      component="p"
      sx={{
        ...body,
      }}
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <Box
      component="table"
      sx={{
        backgroundColor: "purple",
      }}
    >
      {children}
    </Box>
  ),
};
