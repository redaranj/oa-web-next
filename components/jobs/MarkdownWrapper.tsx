import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography } from "styles/theme";
import { MarkdownWrapper as BaseMarkdownWrapper } from "components/common/MarkdownWrapper";

const { h1, h2, h3, body } = typography;

const MarkdownComponents = {
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
  h3: ({ children }) => (
    <Grid item xs={6}>
      <Box
        component="h3"
        sx={{
          ...h3,
          background: "red",
        }}
      >
        {children}
      </Box>
    </Grid>
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
  ul: ({ children }) => (
    <Grid item xs={6}>
      <Box component="ul" sx={{}}>
        {children}
      </Box>
    </Grid>
  ),
};

interface MarkdownWrapperProps {
  title: string;
}

export const MarkdownWrapper: FC<MarkdownWrapperProps> = ({
  title,
  children,
}) => (
  <BaseMarkdownWrapper title={title} components={MarkdownComponents}>
    {children}
  </BaseMarkdownWrapper>
);
