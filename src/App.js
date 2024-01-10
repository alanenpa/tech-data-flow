import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Grid, ThemeProvider, createMuiTheme } from "@mui/material"
import Home from "./pages/Home"
import Configurator from "./pages/Configurator"
import Request from "./pages/Request"
import Finish from "./pages/Finish"
import Informations from "./pages/Informations"

import './style.css'

const App = () => {
  const customTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#ECC833"
      },
    },
    typography: {
      "fontFamily": "Roboto, sans-serif"
    }
  })

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Grid container justifyContent="center" alignItems="center" sx={{ maxWidth: '430px' }}>
          <Routes>
            <Route path="/" element={<Grid item xs={12}><Home /></Grid>} />
            <Route path="/configurator" element={<Grid item xs={12}><Configurator /></Grid>} />
            <Route path="/request" element={<Grid item xs={12}><Request /></Grid>} />
            <Route path="/finish" element={<Grid item xs={12}><Finish /></Grid>} />
            <Route path="/informations" element={<Grid item xs={12}><Informations /></Grid>} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
};


export default App
