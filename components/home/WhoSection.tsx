import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { WhoItem } from "components/home/WhoItem";

export const WhoSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid direction="column">
        <Grid item container direction="row">
          <Grid item sx={{ width: "50%" }}>
            Who we work for
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            OpenArchive is dedicated to protecting media freedom: preserving,
            amplifying, and securely routing mobile media to
            community-maintained collections in accessible public and private
            archives, outside the corporate walled gardens currently dominating
            the online media ecosystem.
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <WhoItem
            name={"Megan"}
            profile={
              "Human rights, legal, academic and journalistic organizations"
            }
            description={
              "Social media and messaging apps compress audio and video before upload, which is not an option for our work"
            }
            image={null}
            url={null}
          />
          <WhoItem
            name={"Kevin"}
            profile={
              "Activists, Citizen reporters, eyewitnesses and freelance documentarians"
            }
            description={
              "In the past I would have transferred data to my laptop and uploaded from there but I wouldn’t do that anymore, Increasing I am using the mobile device. There’s no need to go through the laptop, really."
            }
            image={null}
            url={null}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
