import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';

import PortfolioCard from '../../ui/PortfolioCard';
import dataProjects from '../../data/dataProjects';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    minHeight: "100vh", 
    padding: "1.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "10vh 1.5rem",
    }
  } 
}));

const PortfolioSection = () => {
  const classes = useStyles();

  return (
    <Box  className={classes.container}>
        <Typography component="h4" variant="h4" >Portfolio</Typography>
        <Typography component="h3" variant="h3">
            Algunos Proyectos.
        </Typography>
        <Box my={2} />
        <Grid container spacing={3}>
          {
            dataProjects.map((e, i)=> (
              <Grid item xs={12} sm={12} md={4} key={i}>
                <PortfolioCard project={e} />
              </Grid>
            ))
          }

        </Grid>
    </Box>
  );
}

export default PortfolioSection;