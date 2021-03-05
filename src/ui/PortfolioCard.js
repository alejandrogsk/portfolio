import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles( (theme) =>  ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
    backgroundPosition: "top"
  },
  button: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily.primary,
    borderColor: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "white",
      
    }
  },
  buttonOutlined:{
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    borderColor: theme.palette.secondary.main,
    borderWidth: "1px",
    fontFamily: theme.typography.fontFamily.primary,
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main,
    }
  },
  icon: {
    marginRight: "4px",
    fontSize: "1rem"
  }
}));

export default function PortfolioCard({project}) {
  const classes = useStyles();

  console.log(project)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" variant="outlined" size="small" href={project.linkPage}  className={classes.button} >
          View
        </Button>
        <Button variant="outlined" size="small"  href={project.linkFrontRepository} className={classes.buttonOutlined}>
          <GitHubIcon className={classes.icon}/>
          GitHub
        </Button>
        {
          project.linkBackRepository && <Button variant="outlined" size="small"  href={project.linkBackRepository}  className={classes.buttonOutlined}><GitHubIcon className={classes.icon}/> Backend </Button>
        }
      </CardActions>
    </Card>
  );
}
