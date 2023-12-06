import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, Skeleton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

const Products = () => {
  return (
    <Grid container sx={{ m: 'auto', p: 'auto' }} spacing={3} direction='column' alignItems='center'>
      <Paper elevation={10}>
        <Grid item sx={{ p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography alignItems='center' variant='h5'>
              ZAURAC 4-30
            </Typography>
          </Box>
        </Grid>
        <Grid item alignItems='center' sx={{ p: 2 }}>
          <Box display='flex' alignItems='center' justifyContent="center">
            <Typography>What kind of illumination would you need?</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Card>
            <Skeleton sx={{ m: 2, height: 120 }} animation="wave" variant="rectangular" />
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
        <Grid item sx={{ p: 2 }}>
          <Card>
            <Skeleton sx={{ m: 2, height: 120 }} animation="wave" variant="rectangular" />
            <CardHeader
              title='Long range'
            />
            <CardContent>
              <Typography>
                Lorem ipsum phasellus justo purus, venenatis a sapien eu, faucibus porttitor libero.
                Proin venenatis diam tortor, nec vulputate sem efficitur in. Aenean ipsum ipsum, imperdiet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Card>
            <Skeleton sx={{ m: 2, height: 120 }} animation="wave" variant="rectangular" />
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
        <Grid item sx={{ p: 2 }}>
          <Card>
          <CardHeader
              avatar={
                <SettingsIcon />
              }
              title='Configurator'
              subheader='Customize your light'
            />
            <CardActions>
              <Button sx={{ m: 1}} variant="outlined">
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Products

