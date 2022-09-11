import { FC, PropsWithChildren } from "react";
import { colors, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;

  return (
    <BaseHeaderSection
      backgroundColor={white}
      sx={{
        py: 13,
        px: 11.25,
        pb: 0,
        [ps]: {
          py: 6,
          px: 3,
          pb: 0,
        },
        [pl]: {
          py: 6,
          px: 3,
          pb: 0,
        },
        [ts]: {
          py: 7,
          px: 4.375,
          pb: 0,
        },
        [tl]: {
          py: 9,
          px: 4.375,
          pb: 0,
        },
        [ds]: {
          py: 13,
          px: 6.25,
          pb: 0,
        },
        [dl]: {
          py: 13,
          px: 11.25,
          pb: 0,
        },
      }}
    >
      {children}
    </BaseHeaderSection>
  );
};
