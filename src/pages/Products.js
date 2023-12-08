import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, Skeleton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <Grid container sx={{ m: 'auto', p: 'auto', width: '100%' }} spacing={3} direction='column' alignItems='center'>
      <Paper elevation={10}>
        <Grid item sx={{ p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography alignItems='center' variant='h5' sx={{pt: 3}}>
              ZAURAC 4-30
            </Typography>
          </Box>
        </Grid>
        <Grid item alignItems='center' sx={{ p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography>What kind of illumination would you need?</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ m: 3, borderStyle: 'dashed', borderColor: '#bdbdbd', borderRadius: '20px', borderWidth: '2px'  }}>
          <Card sx={{ borderRadius: '20px' }} >
            <Skeleton sx={{ m: 2, height: 120, borderRadius: '10px' }} animation="wave" variant="rectangular" />
            <CardHeader
              title='Wide range'
            />
            <CardContent>
              <Typography>
                Lorem ipsum phasellus justo purus, venenatis a sapien eu, faucibus porttitor libero.
                Proin venenatis diam tortor, nec vulputate sem efficitur in. Aenean ipsum ipsum, imperdiet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ m: 3, borderStyle: 'dashed', borderColor: '#bdbdbd', borderRadius: '20px', borderWidth: '2px'  }}>
          <Card sx={{ borderRadius: '20px' }} >
            <Skeleton sx={{ m: 2, height: 120, borderRadius: '10px' }} animation="wave" variant="rectangular" />
            <CardHeader
              title='Spot'
            />
            <CardContent>
              <Typography>
                Lorem ipsum phasellus justo purus, venenatis a sapien eu, faucibus porttitor libero.
                Proin venenatis diam tortor, nec vulputate sem efficitur in. Aenean ipsum ipsum, imperdiet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ m: 3, borderStyle: 'dashed', borderColor: '#bdbdbd', borderRadius: '20px', borderWidth: '2px'  }}>
          <Card sx={{ borderRadius: '20px' }} >
            <Skeleton sx={{ m: 2, height: 120, borderRadius: '10px' }} animation="wave" variant="rectangular" />
            <CardHeader
              title='Hybrid'
            />
            <CardContent>
              <Typography>
                Lorem ipsum phasellus justo purus, venenatis a sapien eu, faucibus porttitor libero.
                Proin venenatis diam tortor, nec vulputate sem efficitur in. Aenean ipsum ipsum, imperdiet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ p: 2, m: 2 }}>
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
      </Paper>
    </Grid>
  )
}

export default Products

