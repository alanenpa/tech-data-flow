
import { Fragment } from 'react'

import { Button, Grid, Paper, Stack, Typography } from '@mui/material'
import RenderImage from './RenderImage'
import Configurations from './Configurations'

import box from '../assets/box.svg'
import box_active from '../assets/box-active.svg'
import line from '../assets/line.svg'
import line_active from '../assets/line-active.svg'
import truck from '../assets/Truck.png'
import truck_front from '../assets/Position_Truck front.svg'
import truck_back from '../assets/Position_Truck back.svg'

import hybrid from '../assets/button_hybrid-light-off.svg'
import hybrid_hover from '../assets/button_hybrid-light- over.svg'
import hybrid_active from '../assets/button_hybrid-light-on.svg'

import spot from '../assets/button_spot-light-off.svg'
import spot_hover from '../assets/button_spot-light-over.svg'
import spot_active from '../assets/button_spot-light-on.svg'

import wide from '../assets/button_wide-light-off.svg'
import wide_hover from '../assets/button_wide-light-over.svg'
import wide_active from '../assets/button_wide-light-on.svg'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Configurator = () => {
  const [selectedType, setSelectedType] = useState('wide')
  const [position, setPosition] = useState(['back', 'top', 'left'])
  const [lightsList, setLightsList] = useState([])

  const handleTypeChange = (type) => {
    setSelectedType(type)
  }

  const handlePositionChange = (value1, value2) => {
    let newPosition = position.slice()
    if (value1 === 'front' || value1 === 'back') {
      newPosition[0] = value1
    } else if (value1 === 'top' || value1 === 'bottom') {
      newPosition[1] = value1
    } else if (value1 === 'left' || value1 === 'right') {
      newPosition[2] = value1
    } else {
      console.log('invalid value1')
    }
    if (value2) {
      if (value2 === 'front' || value2 === 'back') {
        newPosition[0] = value2
      } else if (value2 === 'top' || value2 === 'bottom') {
        newPosition[1] = value2
      } else if (value2 === 'left' || value2 === 'right') {
        newPosition[2] = value2
      } else {
        console.log('invalid value2')
      }
    }
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
    return lightsList.some(existingLight =>
      existingLight.position.every((value, index) => value === newLight.position[index])
    )
  }

  const removeLight = (index) => {
    const newList = lightsList.filter((light, i) =>
      i !== index
    )
    setLightsList(newList)
  }

  return (
    <Fragment>
      <Navbar />
      <Grid container sx={{ width: '100%', m: 0 }} direction='column' alignItems='center'>
        <Paper elevation={0} sx={{ width: '100%' }}>
          <Grid item sx={{ p: 2 }}>
            <Typography fontSize={18}>Select your products to preview the light effect</Typography>
          </Grid>
          <Grid item sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
              Types of light
            </Typography>
            <Stack direction='row' justifyContent="space-evenly" alignItems="center" spacing={2}>
              <Stack direction="column" alignItems="center">
                <Button disableRipple onClick={() => handleTypeChange('wide')}>
                  <img
                    src={(selectedType === 'wide') ? wide_active : wide}
                    alt='wide'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Button>
                <Typography variant="subtitle1" align="center">Wide</Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Button disableRipple onClick={() => handleTypeChange('spot')}>
                  <img
                    src={(selectedType === 'spot') ? spot_active : spot}
                    alt='spot'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Button>
                <Typography variant="subtitle1" align="center">Spot</Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Button disableRipple onClick={() => handleTypeChange('hybrid')}>
                  <img
                    src={(selectedType === 'hybrid') ? hybrid_active : hybrid}
                    alt='hybrid'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Button>
                <Typography variant="subtitle1" align="center">Hybrid</Typography>
              </Stack>
            </Stack>

          </Grid>
          <Grid item sx={{ p: 2, pt: 4 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
              Position
            </Typography>
            <Stack sx={{ p: 1, mb: 2 }} direction='row' justifyContent="space-evenly" alignItems="center">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button disableRipple onClick={() => handlePositionChange('front')}>
                  <div style={{ paddingRight: '13px', paddingTop: '21px' }}>
                    <img
                      src={(position[0] === 'front') ? box_active : box}
                      alt='frontside of truck'
                    />
                  </div>
                  <div>
                    <img style={{ paddingRight: '0px' }}
                      src={(position[0] === 'front') ? line_active : line}
                    />
                  </div>
                </Button>
                <div style={{ margin: '0px' }}>
                  <img style={{ width: '88px', height: '67px' }}
                    src={truck}
                  />
                </div>
                <Button disableRipple onClick={() => handlePositionChange('back')}>
                  <div>
                    <img style={{ paddingRight: '0px' }}
                      src={(position[0] === 'back') ? line_active : line}
                    />
                  </div>
                  <div style={{ paddingLeft: '13px', paddingTop: '21px' }}>
                    <img
                      src={(position[0] === 'back') ? box_active : box}
                      alt='backside of truck'
                    />
                  </div>
                </Button>
              </div>
            </Stack>

            <Stack sx={{ borderRadius: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={7}>
              <Button disableRipple onClick={() => {handlePositionChange('top', 'left')}}>
                <div>
                  <img
                    src={(position[1] === 'top' && position[2] === 'left') ? box_active : box}
                    alt='backside of truck'
                  />
                </div>
              </Button>
              <Button disableRipple onClick={() => {handlePositionChange('top', 'right')}}>
                <div>
                  <img
                    src={(position[1] === 'top' && position[2] === 'right') ? box_active : box}
                    alt='backside of truck'
                  />
                </div>
              </Button>
            </Stack>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0px' }}>
              <img
                src={(position[0] === 'back') ? truck_back : truck_front}
                alt='backside of truck'
                style={{ width: '40%', height: '40%', objectFit: 'cover' }}
              />
            </div>

            <Stack sx={{ borderRadius: 1, pt: 1 }} direction='row' justifyContent="space-evenly" alignItems="center" spacing={7}>
              <Button disableRipple onClick={() => {handlePositionChange('bottom', 'left')}}>
                <div>
                  <img
                    src={(position[1] === 'bottom' && position[2] === 'left') ? box_active : box}
                    alt='backside of truck'
                  />
                </div>
              </Button>
              <Button disableRipple onClick={() => {handlePositionChange('bottom', 'right')}}>
                <div>
                  <img
                    src={(position[1] === 'bottom' && position[2] === 'right') ? box_active : box}
                    alt='backside of truck'
                  />
                </div>
              </Button>
            </Stack>

          </Grid>
          <Grid item sx={{ p: 2, pt: 4 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
              Preview
            </Typography>
          </Grid>
          <RenderImage lightsList={lightsList} />
          <Configurations lightsList={lightsList} removeLight={removeLight} />
          <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 5, mb: 8 }}>
            <Grid item sx={{ flex: 1, pl: 2, pb: 1, pr: 2 }}>
              <Button
                onClick={() => handleAddConfiguration()}
                variant='contained'
                style={{ width: '100%', paddingLeft: '20px', fontSize: '11px' }}
              >
                Add +
              </Button>
            </Grid>
            <Grid item sx={{ flex: 1, pr: 2, pb: 1, pl: 1 }}>
              <Link to='/request' state={{ lightsList }}>
                <Button
                  variant='contained'
                  style={{ width: '100%', paddingRight: '20px', fontSize: '11px' }}
                >
                  Request a quote
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  )
}

export default Configurator;