import { FC, PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";
import { breakpoints as bp } from "styles/theme";

type PageSectionProps = PropsWithChildren<{
  backgroundColor: string;
}>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <Box sx={{ backgroundColor }}>
      <Container
        sx={{
          maxWidth: 1920,
          [bp.desktopSmall]: {},
          [bp.tabletLarge]: {},
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
