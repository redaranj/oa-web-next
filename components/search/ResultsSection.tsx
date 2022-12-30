/* eslint-disable react/no-this-in-sfc */
import { FC, PropsWithChildren, useState, useEffect } from "react";
import Link from "next/link";
import { Box, Grid, TextField } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import Highlighter from "react-highlight-words";

type ResultsSectionProps = PropsWithChildren<{
  documents: any;
}>;

export const ResultsSection: FC<ResultsSectionProps> = ({ documents }) => {
  const { lightGrey, turquoise } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const { bodyLarge, body } = typography;
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query || query.length < 3) {
      setResults([]);
      return;
    }
    const findText = (q, t) => {
      // const regex = new RegExp(`\\s?([^\\s]+\\s${q}\\s[^\\s]+)\\s?`, "i");
      const regex = new RegExp(`(\\w+ ){0,10}${q}( \\w+){0,10}`, "i");
      return t.match(regex);
    };
    const res = [];
    Object.keys(documents).forEach((key) => {
      const val = documents[key];
      if (findText(query, val)?.length > 0) {
        res.push({
          [key]: findText(query, val)[0],
        });
      }
    });
    setResults(res);
  }, [query, documents]);

  return (
    <PageSection
      backgroundColor={lightGrey}
      sx={{
        py: 8,
        px: 11.25,
        [ps]: {
          py: 2,
          px: 3,
        },
        [pl]: {
          py: 2,
          px: 3,
        },
        [ts]: {
          py: 5,
          px: 4.375,
        },
        [tl]: {
          py: 5,
          px: 4.375,
        },
        [ds]: {
          py: 8,
          px: 6.25,
        },
        [dl]: {
          py: 8,
          px: 11.25,
        },
      }}
    >
      <Grid
        container
        rowSpacing={6}
        sx={{
          flexDirection: "column",
          a: { textDecoration: "none" },
        }}
      >
        <Grid item sx={{ textAlign: "center" }}>
          <TextField
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            sx={{ width: "50%", margin: "0 auto" }}
          />
        </Grid>
        <Grid item>
          <Box
            sx={{
              ">p": bodyLarge,
              maxWidth: "50%",
              margin: "0 auto",
              mb: 8,
              minHeight: 600,
            }}
          >
            {results.map((result, idx) => (
              <Box key={idx} sx={{ mb: 6 }}>
                <Box
                  sx={{
                    ...bodyLarge,
                    mb: 1,
                    color: turquoise,
                    textDecoration: "underline",
                  }}
                >
                  <Link href={Object.keys(result)[0]}>
                    {Object.keys(result)[0]}
                  </Link>
                </Box>
                <Box sx={body}>
                  <Highlighter
                    highlightClassName="search-highlight"
                    searchWords={query?.split(" ") ?? []}
                    autoEscape
                    textToHighlight={result[Object.keys(result)[0]]}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
