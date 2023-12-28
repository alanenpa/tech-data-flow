import { Box, Button, Card, CardActions, CardHeader, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import reliability from '../assets/homepage/reliability.svg'
import resistance from '../assets/homepage/resistance.svg'
import weather_resistance from '../assets/homepage/weather_resistance.svg'
import quality_assurance from '../assets/homepage/quality_assurance.svg'
import SettingsIcon from '@mui/icons-material/Settings'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid container sx={{ m: 'auto', p: 'auto', width: '100%' }} display='flex' direction='column' alignItems='center' justifyContent="center" rowSpacing={3}>
        <Grid item>
          <Typography alignItems='center' variant='h5' sx={{ pt: 3 }}>
            ZAURAC 4-30
          </Typography>
        </Grid>
        <Grid item>
          <Typography alignItems='center' variant='h6'>
            All-weather LED work light
          </Typography>
        </Grid>
        <Grid item sx={{ px: 2 }} alignItems='center' justifyContent="center">
          <Typography variant='body1'>
            The Zaurac 4-30 has been developed together with light specialists from a technical university.
            From day one the target has been to create the best possible light for the human eye.
            <br></br>
            <br></br>
            The driver is the most important part of a machine, seen from a productivity point of view.
            A proper working light helps the driver to observe both the movement of the machine, as well as the surroundings,
            in all circumstances; especially during dusk and at dark.
            <br></br>
            <br></br>
            The Zaurac 4-30 is a high-quality light, fabricated in Finland of Finnish components.
            <br></br>
            <br></br>
            We offer a 3-year warranty on our lights.
          </Typography>
        </Grid>
        <Grid item alignItems='center' sx={{ my: 3 }}>
          <Link to='/products'>
            <Button sx={{ m: 1 }} variant="contained">
              Explore products
            </Button>
          </Link>
        </Grid>
        <Grid item display='flex' alignItems='center' justifyContent="center">
          <Typography alignItems='center' variant='h6'>
            Why ZAURAC 4-30?
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          <Box item display='flex' justifyContent="center">
            <img src={reliability} alt='reliability' />
          </Box>
          <Typography sx={{ my: 2, textAlign: 'center' }} variant='subtitle1'>
            Reliability
          </Typography>
          <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
            An operating voltage tailored for 12-24 years, ensuring a prolonged lifespan.
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          <Box item display='flex' justifyContent="center">
            <img src={resistance} alt='resistance' />
          </Box>
          <Typography sx={{ my: 2, textAlign: 'center' }} variant='subtitle1'>
            Resistance
          </Typography>
          <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
            Heat and chemically resistant, waterproof, and excelling in vibration resistance, ZAURAC 4-30 surpasses all others.
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          <Box item display='flex' justifyContent="center">
            <img src={weather_resistance} alt='weather resistance' />
          </Box>
          <Typography sx={{ my: 2, textAlign: 'center' }} variant='subtitle1'>
            Weather resistance
          </Typography>
          <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
            The light passes through fog, dust, rain and snowfall better than any other LED light on the market.
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          <Box item display='flex' justifyContent="center">
            <img src={quality_assurance} alt='quality assurance' />
          </Box>
          <Typography sx={{ my: 2, textAlign: 'center' }} variant='subtitle1'>
            Quality assurance
          </Typography>
          <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
            Each light undergoes thorough testing at multiple production stages and receives a unique serial number,
            ensuring quality and enabling lifecycle traceability.
          </Typography>
        </Grid>
      </Grid>
      <Grid item sx={{ p: 1, pt: 3, m: 1 }}>
        <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '10px' }}>
          <CardHeader
            avatar={<SettingsIcon />}
            title='Configurator'
            subheader='Customize your light'
          />
          <CardActions>
            <Link to='/configurator'>
              <Button sx={{ m: 1 }} variant="contained" >
                Open
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </div>
  )
}

export default Home