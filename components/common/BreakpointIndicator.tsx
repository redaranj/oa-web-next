import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { breakpoints } from "styles/theme";

export const BreakpointIndicator: FC = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    phoneSmall,
    phoneLarge,
    tabletSmall,
    tabletLarge,
    desktopSmall,
    desktopLarge,
  } = breakpoints;

  return !process.env.CI ? (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "red",
        opacity: 0.95,
        color: "white",
        p: 2,
        zIndex: 2000,
      }}
    >
      <Box
        sx={{
          display: "none",
          [phoneSmall]: {
            display: "inherit",
          },
          [phoneLarge]: { display: "none" },
        }}
      >
        Phone Small ({width} px)
      </Box>
      <Box
        sx={{
          display: "none",
          [phoneLarge]: {
            display: "inherit",
          },
          [tabletSmall]: { display: "none" },
        }}
      >
        Phone Large ({width} px)
      </Box>
      <Box
        sx={{
          display: "none",
          [tabletSmall]: {
            display: "inherit",
          },
          [tabletLarge]: { display: "none" },
        }}
      >
        Tablet Small ({width} px)
      </Box>
      <Box
        sx={{
          display: "none",
          [tabletLarge]: {
            display: "inherit",
          },
          [desktopSmall]: { display: "none" },
        }}
      >
        Tablet Large ({width} px)
      </Box>
      <Box
        sx={{
          display: "none",
          [desktopSmall]: {
            display: "inherit",
          },
          [desktopLarge]: { display: "none" },
        }}
      >
        Desktop Small ({width} px)
      </Box>
      <Box
        sx={{
          display: "none",
          [desktopLarge]: {
            display: "inherit",
          },
        }}
      >
        Desktop Large ({width} px)
      </Box>
    </Box>
  ) : null;
};
