import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, TextField, Button, IconButton } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//from email.js
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    minHeight: "100vh", 
    padding: "1.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "10vh 1.5rem",
    }
  }, 
  contactDescription: {
    fontSize: "1.1rem",
    marginTop: "1rem",
    margin: 0,
    [theme.breakpoints.up("md")]: {
      marginRight: "1rem"
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
   
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem"
    }
  },
  formInput: {
    backgroundColor: theme.palette.secondary.light,
    fontFamily: theme.typography.fontFamily.primary,
    margin: ".5rem 0",
  },
  formButton: {
    marginTop: ".5rem",
    width: "50%"
  },
  iconButton: {
    marginTop: "0.5rem",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main
    }
  }
}));

const contactLinks = {
  github: 'https://github.com/alejandrogsk',
  linkedIn: 'https://www.linkedin.com/in/alejandro-suarez-1764881b7',
}

const ContactSection = () => {
  const classes = useStyles();


  const sendEmail = (e) => {
    e.preventDefault();
    
    //those .env variables are required to sen the email with EmailJS
    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_JS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     e.target.reset();
  }



  return (
    <Box className={classes.container} id="contact">
      
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>

        <Box  height="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="start" >
        <Typography component="h4" variant="h4" >Te ayudo?</Typography>
        <Typography component="h3" variant="h3" >Contactame</Typography>
        <Typography variant="body1" className={classes.contactDescription}>Si puedo ayudarte en alguno de tus proyectos
          con javascript, o tienes alguna duda, contactame a mi email mediante este formulario, o tambien mediante github o linkedin. 
        </Typography>
        <Typography variant="body1" className={classes.contactDescription}>Tu consulta no es una molestia.</Typography>
        <Typography variant="body1" className={classes.contactDescription}>¡Muchas Gracias!</Typography>
        
        <Box display="flex">
          <IconButton className={classes.iconButton} target="_blank" variant="contained" color="secondary" size="small" href={contactLinks.github}>
            <GitHubIcon />
          </IconButton>

          <IconButton className={classes.iconButton} target="_blank" variant="contained" color="secondary" size="small" href={contactLinks.linkedIn}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        
        </Box>

        </Grid>
        <Grid item xs={12} sm={12} md={6}>

          <form  className={classes.form} onSubmit={sendEmail}>
            <TextField     
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Nombre"
              defaultValue=""
              variant="outlined"
              name="name"
            />

            <TextField
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              variant="outlined"
              name="email"
            />

            <TextField
              className={classes.formInput}
              size="small"
              required
              id="outlined-required"
              label="Asunto"
              defaultValue=""
              variant="outlined"
              name="subject"
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
              name="message"
            />

            <Button className={classes.formButton} type="submit"  variant="contained" color="secondary">
              Enviar mensaje
            </Button>
          </form>

        </Grid>
      </Grid>
        
    </Box>
  );
}

export default ContactSection;