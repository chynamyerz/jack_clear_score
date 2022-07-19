import React, { FC } from "react";
import { Grid } from "@mui/material";

import { CSCard, CSHeader } from "../../components";

export const CSInsightsPage: FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <CSHeader />
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} lg={4}>
            <CSCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CSCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CSCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
