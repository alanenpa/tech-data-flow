import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import checkmark from '../assets/Group 37319.svg'

const Finish = () => {
  return (
    <Grid container sx={{ m: 'auto', height: '100vh', maxWidth: '430px' }} direction='column' alignItems='center' justifyContent='center'>
      <Grid item sx={{ mr: '8px' }}>
        <img src={checkmark} alt='checkmark' />
      </Grid>
      <Grid item sx={{ mt: 3 }}>
        <Typography sx={{fontWeight: 550}} variant='h5'>Thank you for the request</Typography>
      </Grid>
      <Grid item sx={{ mx: 'auto', px: 3, mt: 3 }} display='flex' textAlign='center'>
        <Typography variant='subtitle1' color="text.secondary">We will review your information and get back within 48 hours.</Typography>
      </Grid>
      <Grid item sx={{ mt: 5, width: '100%' }} display='flex' justifyContent="center">
        <Link to='/'>
          <Button                   
                sx={{
                    width: '80vw',
                    maxWidth: '344px',
                    m: 0,
                    height: '60px',
                    borderRadius: '10px',
                    border: '4px solid gray',
                    color: 'gray',
                    fontSize: '16px',
                    fontWeight: '600'
                  }} variant='contained'>
            Got it!
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Finish