import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Paper, TextField, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

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
  }
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>

        <Box  height="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="start" >
        <Typography component="h4" variant="h4" >Te ayudo?</Typography>
        <Typography component="h3" variant="h3" >Contactar</Typography>
        <Typography variant="body1" className={classes.contactDescription}>Por favos, si puedo ayudarte en alguno de tus proyectos
          con javascript, o tienes alguna duda, contactame a mi email mediante este formulario. 
        </Typography>
        <Typography variant="body1" className={classes.contactDescription}>Tu consulta no es una molestia.</Typography>
        <Typography variant="body1" className={classes.contactDescription}>¡Muchas Gracias!</Typography>
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