import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import Resumme from '../../assets/cv/alejandrosuarezcv.pdf'

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
  },
  buttonOutlined:{
    alignSelf: "flex-start",
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    borderColor: theme.palette.secondary.main,
    borderWidth: "1px",
    fontFamily: theme.typography.fontFamily.primary,
    marginTop: "2rem",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main,
    }
  },
  icon: {
    marginRight: "4px",
    fontSize: "1rem"
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box p="1.5rem" height="100vh" display="flex" flexDirection="column" justifyContent="center" id="home">
      
        <Typography component="span" className={classes.span}>Hola, soy Alejandro</Typography>
        <Typography component="h1" className={classes.title}>
            Desarrollador <br/>Fullstack Junior
        </Typography>
        <Button variant="outlined" size="small" className={classes.buttonOutlined} href={Resumme} target="_blank">
          <CloudDownloadIcon className={classes.icon}/> Descargar CV
        </Button>
      
    </Box>
  );
}

export default HeroSection;