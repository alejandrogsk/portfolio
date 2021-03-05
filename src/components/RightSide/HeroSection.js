import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,  
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "4rem",
    fontWeight: 600,
    lineHeight: 1.2,
    textTransform: "uppercase",
    [theme.breakpoints.down('md')]: {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "2.1rem"
    },
  },
  span: {
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "2.8rem",
    fontWeight: 500,
    textTransform: "uppercase",
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "1.4rem"
    },
  }
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box p="1.5rem" height="100vh" display="flex" flexDirection="column" justifyContent="center">
        <Typography component="span" className={classes.span}>Hola, soy Alejandro</Typography>
        <Typography component="h1" className={classes.title}>
            Desarrollador Fullstack Junior
        </Typography>
    </Box>
  );
}

export default HeroSection;