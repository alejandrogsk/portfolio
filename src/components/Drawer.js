import React from 'react';

import {Drawer, Hidden, IconButton, Typography, Box, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import HeroSection from './RightSide/HeroSection'
import TechSection from './RightSide/TechSection';
import PortfolioSection from './RightSide/PortfolioSection';
import ContactSection from './RightSide/ContactSection';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
        
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButtonDos:{
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    position: "fixed",
    top: "4px",
    right: "4px",
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: theme.palette.secondary.light,
    width: drawerWidth,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
  },

  //custome
  image: {
    borderRadius: "50%",
    display: "block",
    height: "auto",
    marginTop: "5rem",
    width: "9rem"
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "1rem",
    textTransform: "uppercase"
  },
  linkBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
    marginBottom: "auto",
    width: "100%"
  },
  menuLink: {
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: 600,
    marginTop: "0.6rem",
    textTransform: "uppercase",
    "&:hover": {
      color: theme.palette.secondary.main,
        cursor: "pointer"
      }
  },
  navbarContent: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
  },

  footer: {
    fontSize: ".8rem",
    textAlign: "center",
  }
}));

const menuLinks = [
  {title:"Home", path: "/"},
  {title:"Sobre Mí", path: "/"},
  {title:"Proyectos", path: "/"},
  {title:"Contacto", path: "/"}
]

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButtonDos}
          >
            <MenuIcon />
          </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">

        {/*MOBILE */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <img className={classes.image} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Alejandro"/>
            <Typography component="h2" className={classes.name}>Alejandro Suarez</Typography>
            <Typography component="h6" className={classes.subtitle}>Javascript Developer</Typography>
            <Box className={classes.linkBox}>
              {
                menuLinks.map((link, index) => (
                    <Link className={classes.menuLink} key={index}>{link.title}</Link>
                ))
              }
            </Box>
            <Typography  className={classes.footer} >Copyright {new Date().getFullYear()} | Alejandro Suarez</Typography>
          
          </Drawer>
        </Hidden>

        {/*DESKTOP */}
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <img className={classes.image} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Alejandro"/>
        <Typography component="h2" variant="h2">Alejandro Suarez</Typography>
        <Typography component="h6" className={classes.subtitle}>Javascript Developer</Typography>
        <Box className={classes.linkBox}>
            {
                menuLinks.map((link, index) => (
                    <Link className={classes.menuLink} key={index}>{link.title}</Link>
                ))
            }
        </Box>

        <Typography className={classes.footer}>Copyright {new Date().getFullYear()} | Alejandro Suarez</Typography>

          </Drawer>
        </Hidden>
      </nav>


      <main className={classes.content}>
        <div className={classes.toolbar} />
        <HeroSection />
        <TechSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}


export default ResponsiveDrawer;
