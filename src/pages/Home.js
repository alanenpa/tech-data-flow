import { Box, Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import reliability from '../assets/homepage/reliability.svg'
import resistance from '../assets/homepage/resistance.svg'
import weather_resistance from '../assets/homepage/weather_resistance.svg'
import quality_assurance from '../assets/homepage/quality_assurance.svg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid container sx={{ m: 'auto', p: 'auto', width: '100%' }} display='flex' direction='column' alignItems='center' justifyContent="center" rowSpacing={3}>
        <Grid item>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography alignItems='center' variant='h5' sx={{ pt: 3 }}>
              ZAURAC 4-30
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography alignItems='center' variant='h6'>
              All-weather LED work light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box alignItems='center' justifyContent="center" sx={{ px: 2 }}>
            <Typography alignItems='center' variant='body1' sx={{ mx: 'auto' }}>
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
          </Box>
          <Grid item alignItems='center' sx={{ py: 5 }}>
            <Box display='flex' alignItems='center' justifyContent="center">
              <Link to='/products'>
                <Button sx={{ m: 1 }} variant="contained">
                  Explore products
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item display='flex' alignItems='center' justifyContent="center">
            <Typography alignItems='center' variant='h6'>
              Why ZAURAC 4-30?
            </Typography>
          </Grid>
          <Grid item display='flex' justifyContent="center" sx={{ pt: 5 }}>
            <img src={reliability} alt='reliability' />
          </Grid>
          <Grid item sx={{ py: 2 }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>
              Reliability
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
              An operating voltage tailored for 12-24 years, ensuring a prolonged lifespan.
            </Typography>
          </Grid>
          <Grid item display='flex' justifyContent="center" sx={{ pt: 5 }} >
            <img src={resistance} alt='resistance' />
          </Grid>
          <Grid item sx={{ py: 2 }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>
              Resistance
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
              Heat and chemically resistant, waterproof, and excelling in vibration resistance, ZAURAC 4-30 surpasses all others.
            </Typography>
          </Grid>
          <Grid item display='flex' justifyContent="center" sx={{ pt: 5 }} >
            <img src={weather_resistance} alt='weather resistance' />
          </Grid>
          <Grid item sx={{ py: 2 }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>
              Weather resistance
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
              The light passes through fog, dust, rain and snowfall better than any other LED light on the market.
            </Typography>
          </Grid>
          <Grid item display='flex' justifyContent="center" sx={{ pt: 5 }} >
            <img src={quality_assurance} alt='quality assurance' />
          </Grid>
          <Grid item sx={{ py: 2 }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>
              Quality assurance
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'center', px: 3 }} variant='subtitle1' color="text.secondary">
              Each light undergoes thorough testing at multiple production stages and receives a unique serial number,
              ensuring quality and enabling lifecycle traceability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home