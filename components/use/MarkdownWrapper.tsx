import { FC } from "react";
import { Box } from "@mui/material";
import { typography } from "styles/theme";
import { MarkdownWrapper as BaseMarkdownWrapper } from "components/common/MarkdownWrapper";

const { h1, h2, body } = typography;

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
