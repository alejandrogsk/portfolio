import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { IconButton, Box } from '@material-ui/core';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles( (theme) =>  ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
    backgroundPosition: "top",
    [theme.breakpoints.down("sm")]: {
      height: 220
    },
  },
  content: {
    [theme.breakpoints.down("lg")]: {
      minHeight: "7.5rem",
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "8.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
  },
  linkIcon: {
    transform: "rotate(-45deg)"
  },
  button: {
    fontFamily: theme.typography.fontFamily.primary,
  },
  buttonGithub:{
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    borderColor: theme.palette.secondary.main,
    borderWidth: "1px",
    fontFamily: theme.typography.fontFamily.primary,
    marginLeft: "auto !important",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main,
    }
  },
  icon: {
    fontSize: "1.25rem",
    marginRight: ".25rem"
  },
  iconButton: {
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main
    }
  }
}));

export default function PortfolioCard({project}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea href={project.linkPage} target="_blank">
        <CardMedia
          className={classes.media}
          image={project.image}
          title={project.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{with: "100%"}}>

        <IconButton target="_blank" variant="contained" color="secondary" size="small" href={project.linkPage}  className={classes.iconButton}> 
          <LinkIcon className={classes.linkIcon}/>
        </IconButton>

        <IconButton target="_blank" variant="contained" color="secondary" size="small" href={project.linkFrontRepository} className={classes.iconButton}>
          <GitHubIcon />
        </IconButton>

        {
          project.linkBackRepository &&
            <Button variant="outlined" size="small"  href={project.linkBackRepository}  className={classes.buttonGithub}>
              <GitHubIcon className={classes.icon}/> Backend 
            </Button>
        }
      </CardActions>
    </Card>
  );
}
