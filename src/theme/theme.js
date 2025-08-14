import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#328616" // HomeRun CTA green
    },
    secondary: {
      main: "#f5a623"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  }
});

export default theme;
