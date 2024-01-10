
import { Fragment } from 'react'

import { Button, Grid, Paper, Stack, Typography } from '@mui/material'
import RenderImage from './RenderImage'
import Configurations from './Configurations'

import truck from '../assets/truck position icons/Position_side.svg'
import truck_front from '../assets/truck position icons/Position_front.svg'
import truck_back from '../assets/truck position icons/Position_back.svg'

import hybrid from '../assets/button_hybrid-light-off.svg'
import hybrid_active from '../assets/button_hybrid-light-on.svg'

import spot from '../assets/button_spot-light-off.svg'
import spot_active from '../assets/button_spot-light-on.svg'

import wide from '../assets/button_wide-light-off.svg'
import wide_active from '../assets/button_wide-light-on.svg'

import box_front from '../assets/truck position icons/Position_front off.svg'
import box_front_active from '../assets/truck position icons/Position_front on.svg'
import box_back from '../assets/truck position icons/Position_back off.svg'
import box_back_active from '../assets/truck position icons/Position_back on.svg'

import box_top_left from '../assets/truck position icons/Position_top left off.svg'
import box_top_left_active from '../assets/truck position icons/Position_top left on.svg'
import box_top_right from '../assets/truck position icons/Position_top right off.svg'
import box_top_right_active from '../assets/truck position icons/Position_top right on.svg'

import box_bottom_left from '../assets/truck position icons/Position_low left off.svg'
import box_bottom_left_active from '../assets/truck position icons/Position_low left on.svg'
import box_bottom_right from '../assets/truck position icons/Position_low right off.svg'
import box_bottom_right_active from '../assets/truck position icons/Position_low right on.svg'


import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SimplePopup from './SimplePopup'

const Configurator = () => {
  const [selectedType, setSelectedType] = useState('')
  const [position, setPosition] = useState(['', '', ''])
  const [lightsList, setLightsList] = useState([])
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [popUpMessage, setPopUpMessage] = useState("Please select a type and position!")

  const preventAdd = () => {
    if (selectedType==="" || position[0]==="" || position[1]==="" || position[2]==="") {
      return true
    }
    return false
   }

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

    if (preventAdd() === true) {
      setPopUpMessage("Please select a type and position")
      togglePopup()
      return
  }

    if (alreadyExists(newLight)) {
      setPopUpMessage("Position is already occupied")
      togglePopup()
      return}
      
    setLightsList([...lightsList, newLight])
    setSelectedType("")
    setPosition(["", "", ""])
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

  const togglePopup = () => {
    setPopupOpen(true)
    setTimeout(() => {
      setPopupOpen(false)
    }, 1500)
  }

  return (
    <Fragment>
      <SimplePopup isOpen={isPopupOpen} message={popUpMessage}/>
      <Navbar />
      <Typography variant='h6' sx={{ paddingBottom: 1, fontSize: '30px', textAlign: 'center' }}>
        Configurator
      </Typography>

      <Grid container sx={{ width: '100%', m: 0 }} direction='column' alignItems='center'>
        <Paper elevation={0} sx={{ width: '100%' }}>
          <Grid item sx={{ p: 2, pl: 3, pb: 1 }}>
            <Typography fontSize={18}>Select a type and position for your light:</Typography>
          </Grid>
          <Grid item sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: '2px' }}>
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
          <Grid item sx={{ p: 2, pt: 1 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: 0 }}>
              Position
            </Typography>
          <Stack sx={{ p: 1, pt: 0, mb: 2 }} direction='row' justifyContent="space-between" alignItems="center">
            <Button disableRipple onClick={() => handlePositionChange('front')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '60px', paddingRight: '19px', paddingTop: '20px' }}>
                  <img
                    src={(position[0] === 'front') ? box_front_active : box_front}
                    alt='frontside of truck'
                  />
                </div>
              </div>
            </Button>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: '10px' }}>
                <img style={{ width: '150px', objectFit: 'contain' }} src={truck} alt='truck' />
              </div>
            <Button disableRipple onClick={() => handlePositionChange('back')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '60px', paddingLeft: '19px', paddingTop: '20px' }}>
                  <img
                    src={(position[0] === 'back') ? box_back_active : box_back}
                    alt='backside of truck'
                  />
                </div>
              </div>
            </Button>
          </Stack>

          <Stack sx={{ p: 1, mb: 0, pl: 0, ml: 0 }} direction='row' justifyContent="space-between" alignItems="center">
            <Stack sx={{ alignItems: 'center' }} direction='column'>
              <Button disableRipple onClick={() => {handlePositionChange('top', 'left')}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '60px' }}>
                    <img
                      src={(position[1] === 'top' && position[2] === 'left') ? box_top_left_active : box_top_left}
                      alt='top left box'
                    />
                  </div>
                </div>
              </Button>
              <div style={{ height: '10px' }}></div>
              <Button disableRipple onClick={() => {handlePositionChange('bottom', 'left')}}>
                <div style={{ width: '60px' }}>
                  <img
                    src={(position[1] === 'bottom' && position[2] === 'left') ? box_bottom_left_active : box_bottom_left}
                    alt='bottom left box'
                  />
                </div>
              </Button>
            </Stack>

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: '10px' }}>
              <img
                src={(position[0] === 'back') ? truck_back : truck_front}
                alt='backside of truck'
                style={{ height: '150px', objectFit: 'contain' }}
              />
            </div>

            <Stack sx={{ alignItems: 'center' }} direction='column'>
              <Button disableRipple onClick={() => {handlePositionChange('top', 'right')}}>
                <div style={{ width: '60px' }}>
                  <img
                    src={(position[1] === 'top' && position[2] === 'right') ? box_top_right_active : box_top_right}
                    alt='top right box'
                  />
                </div>
              </Button>
              <div style={{ height: '10px' }}></div>
              <Button disableRipple onClick={() => {handlePositionChange('bottom', 'right')}}>
                <div style={{ width: '60px' }}>
                  <img
                    src={(position[1] === 'bottom' && position[2] === 'right') ? box_bottom_right_active : box_bottom_right}
                    alt='bottom right box'
                  />
                </div>
              </Button>
            </Stack>
          </Stack>

          </Grid>
          <Grid item sx={{ p: 2, pt: 1 }}>
            <Typography variant='h6' sx={{ pl: 1, pb: 1 }}>
              Preview
            </Typography>
          </Grid>
          <Grid item sx={{ py: 0, pt: 0 }}>
            <RenderImage lightsList={lightsList} selected={{type: selectedType, position: position}} alreadyExists={alreadyExists({type: selectedType, position: position})}/>
          </Grid>
          <Configurations lightsList={lightsList} removeLight={removeLight} />
          <Grid container justifyContent="space-between" alignItems="center" sx={{ m3: 5, mb: 4, mt: 3 }}>
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
