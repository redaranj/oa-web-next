import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ResearchSection: FC<PropsWithChildren> = ({
  children
}) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box>
        {children}
      </Box>
    </PageSection >
  );
};
