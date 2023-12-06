import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import lamp from '../assets/lamp.png'
import truck_back from '../assets/truck-back.png'
import truck_front from '../assets/truck-front.png'
import border_top from '../assets/border_top.png'
// import border_bottom from '../assets/border_bottom.png'

const Configurator = () => {
  return (
    <Grid container sx={{ m: '1vh', p: '1vh' }} spacing={3} direction='column' alignItems='center'>
      <Paper elevation={10}>
        <Grid item sx={{ p: 2 }}>
          <Typography>Select your products to preview the light effect</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Typography sx={{ pl: 1, pb: 1 }}>
            Types of light
          </Typography>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            {/* <Button startIcon={<Avatar src={lamp} />}></Button> */}
            {/* <Button startIcon={<Avatar src={lamp} />}></Button> */}
            {/* <Button startIcon={<Avatar src={lamp} />}></Button> */}
            <Button>Wide</Button>
            <Button>Spot</Button>
            <Button>Hybrid</Button>
          </Stack>
        </Grid>
        <Grid item sx={{ p: 2, pt: 4 }}>
          <Typography sx={{ pl: 1, pb: 1 }}>
            Position
          </Typography>
          {/* <Stack direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button sx={{ textDecoration: 'underline' }}>
              <Typography sx={{ textDecoration: 'underline' }}>
                Front
              </Typography>
            </Button>
            <Button>
              <Typography sx={{ textDecoration: 'underline' }}>
                Back
              </Typography>
            </Button>
          </Stack> */}
          <Stack sx={{ p: 1 }} direction='row' justifyContent="space-evenly" alignItems="center">
            <Button><img src={truck_back} alt='backside of truck' /></Button>
            <Button><img src={truck_front} alt='frontside of truck' /></Button>
          </Stack>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button startIcon={<Avatar src={border_top} />}></Button>
            <Button startIcon={<Avatar src={border_top} />}></Button>
          </Stack>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1, mt: 3 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button startIcon={<Avatar src={border_top} />}></Button>
            <Button startIcon={<Avatar src={border_top} />}></Button>
          </Stack>
        </Grid>
        <Grid item sx={{ mt: 5, mb: 3 }} display='flex' justifyContent="center">
          <Button variant='contained'>Add to configuration</Button>
        </Grid>
        <Grid item sx={{ my: 3, mb: 8 }} display='flex' justifyContent="center">
          <Button variant='contained'>Preview configurations</Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Configurator