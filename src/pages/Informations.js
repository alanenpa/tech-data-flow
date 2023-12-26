import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Button, Card, CardActions, CardContent, CardHeader, Typography, Box } from '@mui/material';
import Navbar from './Navbar';
import Accordion from './Accordion';

import wide from '../assets/Wide graphic.png';
import spot from '../assets/Spot graphic.png';
import hybrid from '../assets/Hybrid graphic.png';

import wide_graph from '../assets/graphs/Zaurak Graphs_4-30 Wide.svg'
import spot_graph from '../assets/graphs/Zaurak Graphs_4-30 Spot.svg'
import hybrid_graph from '../assets/graphs/Zaurak Graphs_4-30 Hybrid.svg'
import color_graph from '../assets/graphs/Zaurak Graphs color space_4-30 Color space_4-30 Color space.svg'

import LuminousRatioIcon from '../assets/specs icons/luminous-ratio.svg';
import LuminousFluxIcon from '../assets/specs icons/luminous-flux.svg';
import BeamAngleIcon from '../assets/specs icons/beam-angle.svg';
import ColorTemperatureIcon from '../assets/specs icons/color-temperature.svg';
import TemperatureRangeIcon from '../assets/specs icons/temperature-range.svg';
import DimensionsIcon from '../assets/specs icons/dimensions.svg';
import UsageIcon from '../assets/specs icons/usage.svg';
import WarrantyIcon from '../assets/specs icons/warranty.svg';

import SettingsIcon from '@mui/icons-material/Settings'



const Informations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const commonInfo = {
    luminousRatio: '100 lux (6 m)\n40 lux (8 m)',
    luminousFlux: '2600 lm',
    colorTemperature: '4,500 K (neutral white)',
    temperatureRange: '-40...+65°C (max. 75 °C)',
    dimensions: '183×97×43 (without bracket)\n183×97×64 (with bracket)',
    usage: '24/7',
    warranty: '3 years',
    info2: 'The package includes floodlight with a 50 cm cable, mounting equipment, manual and warranty.',
  };

  const lightData = [
    {
      type: 'Wide',
      info:
        'Zaurac 4-30 with wide lens is primarily for small machines and solutions where the distance to illuminate is short. The beam is very wide and is even throughout, without any focus points. We recommend this work light in particular for small excavators (under 13 tons), maintenance vehicles and to forest machines and backhoes for close illumination.',
      beamAngle: '37° × 28°',
      ...commonInfo,
    },
    {
      type: 'Spot',
      info:
        'Zaurac 4-30 with spot lens is primarily for big machines and solutions where the distance to illuminate is big. The beam is very narrow and very focused. We recommend this work light, in particular for dredging and long beam excavators, flatbed trucks where you want to illuminate the flatbed and for forest machines to light up even extremely tall treetops.',
      beamAngle: '14°',
      ...commonInfo,
    },
    {
      type: 'Hybrid',
      info:
        'In the combined version there are both wide and spot lenses in the Zaurac 4-30. This is in the middle of the product range and is primarily for medium-sized machines and solutions that need illumination both close up and at a longer range. We recommend this floodlight in particular for 25 ton excavators, for trucks to illuminate the sides and for snow plowing machinery.',
      beamAngle: '-',
      ...commonInfo,
    },
  ];

  const currentLight = lightData[currentSlide];

  const titleMapping = {
    luminousRatio: 'Luminous ratio',
    luminousFlux: 'Luminous flux',
    beamAngle: 'Beam angle',
    colorTemperature: 'Color temperature',
    temperatureRange: 'Temperature range',
    dimensions: 'Dimensions',
    usage: 'Usage',
    warranty: 'Warranty',
  };

  const graphMapping = {
    'Wide': wide_graph,
    'Spot': spot_graph,
    'Hybrid': hybrid_graph
  }

  const technicalSpecIcons = {
    luminousRatio: (
      <img
        src={LuminousRatioIcon}
        alt="Luminous Ratio"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    luminousFlux: (
      <img
        src={LuminousFluxIcon}
        alt="Luminous Flux"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    beamAngle: (
      <img
        src={BeamAngleIcon}
        alt="Beam Angle"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    colorTemperature: (
      <img
        src={ColorTemperatureIcon}
        alt="Color Temperature"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    temperatureRange: (
      <img
        src={TemperatureRangeIcon}
        alt="Temperature Range"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    dimensions: (
      <img
        src={DimensionsIcon}
        alt="Dimensions"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    usage: (
      <img
        src={UsageIcon}
        alt="Usage"
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
    warranty: (
      <img
        src={WarrantyIcon}
        style={{ width: '24px', height: '24px', marginRight: '8px', marginTop: '10px' }}
      />
    ),
  };

  const dimensionsLines = currentLight.dimensions.split('\n');
  const luminousRatioLines = currentLight.luminousRatio.split('\n');

  return (
    <Fragment>
      <Navbar />
      <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '700' }}>{currentLight.type} light</Typography>
      <div>
        <Carousel infiniteLoop showStatus={false} showThumbs={false} onChange={handleSlideChange}>
          <div>
            <img src={wide} alt="Wide" />
          </div>
          <div>
            <img src={spot} alt="Spot" />
          </div>
          <div>
            <img src={hybrid} alt="Hybrid" />
          </div>
        </Carousel>
        <Card elevation={0}>
          <CardContent>
            <div>
              <Typography sx={{ mt: 2, mb: 2 }}>
                {currentLight.info}
              </Typography>
              <Typography>
                {currentLight.info2}
              </Typography>
            </div>
            <div>
              <Typography sx={{ p: 4, pl: 0, fontWeight: '700' }} variant="h5">
                Technical specs
              </Typography>
            </div>
            <div>
              {Object.keys(currentLight)
                .filter((key) => key !== 'type' && key !== 'info' && key !== 'info2')
                .map((spec, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', marginBottom: '2px', boxShadow: 'none', outline: 'none' }}>
                    {technicalSpecIcons[spec]}
                    <CardContent sx={{ ml: '8px', p: 0 }}>
                      <Typography variant="h6" sx={{ m: 0 }}>
                        {titleMapping[spec]}
                      </Typography>
                      <Typography paragraph sx={{ mb: 0, mt: 0 }}>
                        {spec === 'dimensions' ? (
                          dimensionsLines.map((line, lineIndex) => (
                            <Fragment key={lineIndex}>
                              {line}
                              {lineIndex < dimensionsLines.length - 1 && <br />}
                            </Fragment>
                          ))
                        ) : spec === 'luminousRatio' ? (
                          luminousRatioLines.map((line, lineIndex) => (
                            <Fragment key={lineIndex}>
                              {line}
                              {lineIndex < luminousRatioLines.length - 1 && <br />}
                            </Fragment>
                          ))
                        ) : (
                          currentLight[spec]
                        )}
                      </Typography>
                    </CardContent>
                  </Box>
                ))}
            </div>
            <div>
              <Typography sx={{ fontWeight: '700', pt: 2, pb: 4 }} variant="h5">
                Distance range graphs
              </Typography>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '380px', maxHeight: '380px', paddingBottom: '20px'}}> 
              <img
                src={graphMapping[currentLight.type]}
                style={{ width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '380px', maxHeight: '380px'}}> 
              <img
                src={color_graph}
                style={{ width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Accordion />
      </div>
      <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '10px', boxShadow: 'none' }}>
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
    </Fragment>
  );
};

export default Informations;