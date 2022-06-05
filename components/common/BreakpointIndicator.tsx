import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";

export const BreakpointIndicator: FC = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          display: { ps: "inherit", pl: "none" },
        }}
      >
        Phone Small ({width} px)
      </Box>
      <Box
        sx={{
          display: { ps: "none", pl: "inherit", ts: "none" },
        }}
      >
        Phone Large ({width} px)
      </Box>
      <Box
        sx={{
          display: { ps: "none", ts: "inherit", tl: "none" },
        }}
      >
        Tablet Small ({width} px)
      </Box>
      <Box
        sx={{
          display: { ps: "none", tl: "inherit", ds: "none" },
        }}
      >
        Tablet Large ({width} px)
      </Box>
      <Box
        sx={{
          display: { ps: "none", ds: "inherit", dl: "none" },
        }}
      >
        Desktop Small ({width} px)
      </Box>
      <Box
        sx={{
          display: { ps: "none", dl: "inherit" },
        }}
      >
        Desktop Large ({width} px)
      </Box>
    </Box>
  ) : null;
};
