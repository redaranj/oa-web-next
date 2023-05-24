import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;

  return (
    <BaseHeaderSection backgroundColor={turquoise}>
      <Stack
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          "> h1": {
            color: white,
            textAlign: "center",
          },
        }}
      >
        {children}
      </Stack>
    </BaseHeaderSection>
    
  );
};
