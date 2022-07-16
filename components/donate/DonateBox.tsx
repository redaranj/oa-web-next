import { FC } from "react";
import { Box } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { typography, colors } from "styles/theme";

export const DonateBox: FC = ({ children }) => {
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return <Box>{children}</Box>;
};
