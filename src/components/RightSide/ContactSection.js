import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Paper, TextField, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    height:"5rem",
    justifyContent: 'center',
    width: "5rem",
    [theme.breakpoints.down("lg")]: {
      margin: ".5rem 0"
    },
    [theme.breakpoints.down("md")]: {
      height: "4rem",
      width: "4rem"
    },
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
      width: "3rem"
    }
  },
  icon: {
    color: theme.palette.secondary.main,
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("md")]: {
      height: "1.75em",
      width: "1.75em"
    },
    [theme.breakpoints.down("sm")]: {
      height: "1.2em",
      width: "1.2em"
    }
  },
  contactEmail:{
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "1.2rem",
    marginLeft: "1rem",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
      textDecoration: "underline",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem"
    }
  },
  location: {
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "1.2rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem"
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formInput: {
    backgroundColor: theme.palette.secondary.light,
    fontFamily: theme.typography.fontFamily.primary,
    margin: ".5rem 0",
  },
  formButton: {
    marginTop: ".5rem",
    width: "50%"
  }
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <Box height="100vh" 
    display="flex"
    flexDirection="column" 
    justifyContent="center"
    p="1.5rem">
      <Typography component="h4" variant="h4" >Te ayudo?</Typography>
      <Typography component="h3" variant="h3" >Contactar</Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>

        <Box height="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="space-evenly">

          <Box display="flex" alignItems="center">
            <Paper className={classes.paper}>
              <RoomOutlinedIcon className={classes.icon} />
            </Paper>
            <Typography className={classes.location}>Entre Ríos, Argentina.</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Paper className={classes.paper}>
              <MailOutlineIcon className={classes.icon} />
            </Paper>
            <Typography>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alejandrogsk9900@gmail.com" rel="noreferrer nofollow" target="_blank"  className={classes.contactEmail}>alejandrogsk9900@gmail.com</a>
            </Typography>
          </Box>

        </Box>


        </Grid>
        <Grid item xs={12} sm={12} md={6}>

          <form  className={classes.form}>
            <TextField     
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Nombre"
              defaultValue=""
              variant="outlined"
            />

            <TextField
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              variant="outlined"
            />

            <TextField
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Asunto"
              defaultValue=""
              variant="outlined"
            />

            <TextField
              className={classes.formInput}
              size="small"
              id="outlined-multiline-static"
              label="Mensaje"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
            />

            <Button className={classes.formButton} type="submit" variant="contained" color="secondary">
              Enviar mensaje
            </Button>
          </form>

        </Grid>
      </Grid>
        
    </Box>
  );
}

export default ContactSection;