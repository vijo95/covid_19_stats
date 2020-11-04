import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={8} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Infected</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={1} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Recovered</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={1} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Deaths</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={1} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.currentlyInfected)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Currently Infected</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value - recovered.value -deaths.value} duration={1} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid> 
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.rateRecover)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Rate of Recoveries</h2>
            </Typography>
            <Typography variant="h5" component="h2">
             {((100-(((parseFloat(deaths.value))/(parseFloat(deaths.value) + parseFloat(recovered.value)))*100)).toFixed(3)).toString()+"%"} 
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid> 
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.rateDeaths)}>
          <CardContent>
            <Typography color="textPrimary">
              <h2>Rate of Death</h2>
            </Typography>
            <Typography variant="h5" component="h2">
             {((((parseFloat(deaths.value))/(parseFloat(deaths.value) + parseFloat(recovered.value)))*100).toFixed(3)).toString()+"%"} 
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toTimeString()}
            </Typography>
          </CardContent>
        </Grid>   
      </Grid>
    </div>
  );
};
export default Info;