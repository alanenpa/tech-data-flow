import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import RenderImage from './RenderImage'

// import lamp from '../assets/lamp.png'
import truck_back from '../assets/truck-back.png'
import truck_front from '../assets/truck-front.png'
import border_top from '../assets/border_top.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import border_bottom from '../assets/border_bottom.png'

const Configurator = () => {
  const [selectedType, setSelectedType] = useState('wide')
  const [position, setPosition] = useState(['back', 'top', 'left'])
  const [lightsList, setLightsList] = useState([])

  const handleTypeChange = (type) => {
    setSelectedType(type)
  }

  const handlePositionChange = (value, index) => {
    if (position[index] === value) return
    let newPosition = position.slice()
    newPosition[index] = value
    setPosition(newPosition)
  }

  const handleAddConfiguration = () => {
    const newLight = {
      type: selectedType,
      position: position
    }
    if (alreadyExists(newLight)) return
    setLightsList([...lightsList, newLight])
  }

  const alreadyExists = (newLight) => {
    return lightsList.some(light => light.type === newLight.type && light.position === newLight.position)
  }

  return (
    <Grid container sx={{ m: 'auto' }} direction='column' alignItems='center'>
      <Paper elevation={2}>
        <Grid item sx={{ p: 2 }} display='flex' justifyContent="center">
          <Typography variant='h6'>Configurator</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Typography>Select your products to preview the light effect</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
            Types of light
          </Typography>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button onClick={() => handleTypeChange('wide')}>Wide</Button>
            <Button onClick={() => handleTypeChange('spot')}>Spot</Button>
            <Button onClick={() => handleTypeChange('hybrid')}>Hybrid</Button>
          </Stack>
        </Grid>
        <Grid item sx={{ p: 2, pt: 4 }}>
          <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
            Position
          </Typography>
          <Stack sx={{ p: 1, mb: 2 }} direction='row' justifyContent="space-evenly" alignItems="center">
            <Button onClick={() => handlePositionChange('back', 0)}><img src={truck_back} alt='backside of truck' /></Button>
            <Button onClick={() => handlePositionChange('front', 0)}><img src={truck_front} alt='frontside of truck' /></Button>
          </Stack>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button onClick={() => handlePositionChange('top', 1)}>Top</Button>
            <Button onClick={() => handlePositionChange('bottom', 1)}>Bottom</Button>
          </Stack>
          <Stack sx={{ backgroundColor: '#F5F5F5', borderRadius: 1, mt: 3 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Button onClick={() => handlePositionChange('left', 2)}>Left</Button>
            <Button onClick={() => handlePositionChange('right', 2)}>Right</Button>
          </Stack>
        </Grid>
        <RenderImage configurations={lightsList} />
        <Grid item sx={{ mt: 5, mb: 3 }} display='flex' justifyContent="center">
          <Button onClick={() => handleAddConfiguration()} variant='contained'>Add to configurations</Button>
        </Grid>
        <Grid item sx={{ my: 3, mb: 8 }} display='flex' justifyContent="center">
          <Link to='/preview' state={{ lightsList }} ><Button variant='contained'>Preview configurations</Button></Link>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Configurator