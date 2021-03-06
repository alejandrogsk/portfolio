import { createMuiTheme } from '@material-ui/core/styles';

import createBreakpoints from "@material-ui/core/styles/createBreakpoints";


//Color
const colorPrimaryMain = "#000000";
const colorPrimaryLight = "rgba(0, 0, 0, 0.7)";
const colorSecondaryMain = "#2c98f0";
const colorSecondaryLight = "#f2f3f7"

//Font
const fontPrimary = "'Raleway', sans-serif"
const fontSecondary = "'Alegreya Sans', sans-serif";


const brakpoints = createBreakpoints({});

const customeTheme = createMuiTheme({
    brakpoints,
    palette: {
        primary: {
            main: colorPrimaryMain,
            light: colorPrimaryLight,
        },
        secondary: {
            main: colorSecondaryMain,
            light: colorSecondaryLight,
        }
        
    },
    typography: {

        letterSpacing: 1,

        fontFamily: {
            primary: fontPrimary,
            secondary: fontSecondary,
        },


        h2: {
            color: colorPrimaryLight,
            fontFamily: fontSecondary,
            fontSize: "1.8rem",
            fontWeight: 500,
            marginTop: "2rem",
            [brakpoints.down("sm")]: {
                fontSize: "1.5rem",
            },
            [brakpoints.down("xs")]: {
                fontSize: ".9rem",
            },
        },

        h3: {
            color: colorSecondaryMain,
            fontFamily: fontPrimary,
            fontSize: "2.3rem",
            fontWeight: 600,
            letterSpacing: 1,
            [brakpoints.down("sm")]: {
                fontSize: "2rem",
                textAlign: "center",
            }
        },

        h4: {
            color: colorPrimaryMain,
            fontFamily: fontSecondary,
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: 1,
            [brakpoints.down("sm")]: {
                fontSize: "1rem",
                textAlign: "center",
            }
        },

        h6: {
            color: colorPrimaryLight,
            fontFamily: fontPrimary,
            fontWeight: 600,
            letterSpacing: 1,
            fontSize: "1.25rem",
            [brakpoints.down("sm")]: {
                fontSize: "1rem",
            }
        },


        body1: {
            color: colorPrimaryLight,
            fontFamily: fontPrimary,
            letterSpacing: 1,
            fontSize: "1rem"
        }

    },

    
});

export default customeTheme;