import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import checkmark from '../assets/checkmark.png'

const Finish = () => {
  return (
    <Grid container sx={{ m: 'auto' }} direction='column' alignItems='center' justifyContent='center'>
      <Grid item sx={{ mt: 30 }}>
        <img src={checkmark} alt='checkmark' />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Typography variant='h5'>Thank you for the request</Typography>
      </Grid>
      <Grid item sx={{ mx: 'auto', px: 3, mt: 3 }} display='flex' textAlign='center'>
        <Typography variant='subtitle1' color="text.secondary">We will review your information and get back within 24 - 48 hours.</Typography>
      </Grid>
      <Grid item sx={{ mt: 5 }} display='flex' justifyContent="center">
        <Link to='/'><Button variant='contained'>Got it!</Button></Link>
      </Grid>
    </Grid>
  )
}

export default Finish