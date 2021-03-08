import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import imageData from '../../data/dataImages';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    minHeight: "100vh", 
    padding: "1.5rem",
    [theme.breakpoints.down("md")]: {
      padding: " 1.5rem 1.5rem 10vh 1.5rem",
    }
  }, 

  imageContainer: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "start", 
    justifyContent: "center",
    [theme.brakpoints.down("sm")]: {
      alignItems: "center",
  }
  }
}));

const TechSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container} id="technologies">
        <Typography component="h4" variant="h4" >Tecnologías</Typography>
        <Typography component="h3" variant="h3">
            Frameworks de frontend y backend.
        </Typography>
        <Box my={2} />
        <Grid container spacing={4}>
          {
            imageData.map(({image, text}, index) => (
              <Grid item xs={6} sm={4} md={3} key={index} className={classes.imageContainer}>
                  <img src={image} alt={text} style={{width: "50px"}}/>
                  <Typography component="h6" variant="h6">{text}</Typography>
              </Grid>
            ))
          }
          

        </Grid>
    </Box>
  );
}

export default TechSection;