import React, { Fragment, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, Typography } from '@mui/material';
import Navbar from './Navbar';
import Accordion from './Accordion'

import wide from '../assets/Wide graphic.png';
import spot from '../assets/Spot graphic.png';
import hybrid from '../assets/Hybrid graphic.png';

const Informations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = index => {
    setCurrentSlide(index);;
  };

  const commonInfo = {
    luminousRatio: '100 lux (6 m)\n40 lux (8 m)',
    luminousFlux: '2600 lm',
    colorTemperature: '4,500 K (neutral white)',
    temperatureRange: '-40...+65°C (max. 75 °C)',
    dimensions: '183×97×43 (without bracket)\n183×97×64 (with bracket)',
    usage: '24/7',
    warranty: '3 years',
    info2: 'The package includes floodlight with a 50 cm cable, mounting equipment, manual and warranty.'
  };

  const lightData = [
    {
      type: 'Wide',
      info: 'Zaurac 4-30 with wide lens is primarily for small machines and solutions where the distance to illuminate is short. The beam is very wide and is even throughout, without any focus points. We recommend this work light in particular for small excavators (under 13 tons), maintenance vehicles and to forest machines and backhoes for close illumination.',
      beamAngle: '37° × 28°',
      ...commonInfo,
    },
    {
      type: 'Spot',
      info: 'Zaurac 4-30 with spot lens is primarily for big machines and solutions where the distance to illuminate is big. The beam is very narrow and very focused. We recommend this work light, in particular for dredging and long beam excavators, flatbed trucks where you want to illuminate the flatbed and for forest machines to light up the treetops.',
      beamAngle: '14°',
      ...commonInfo,
    },
    {
      type: 'Hybrid',
      info: 'In the combined version there are both wide and spot lenses in the Zaurac 4-30. This is in the middle of the product range and is primarily for medium sized machines and solutions that need illumination both close up and at a longer range. We recommend this floodlight in particular for 25 ton excavators, for trucks to illuminate the sides and for snow plowing machinery.',
      beamAngle: '-',
      ...commonInfo,
    },
  ];

  const currentLight = lightData[currentSlide];

  return (
    <Fragment>
      <Navbar/>
      <div>
        <Typography sx={{ p: 2, textAlign: 'center' }} variant="h4">{currentLight.type} light</Typography>
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
        <Typography sx={{ p: 2, pt: 4 }}> {currentLight.info} </Typography>
        <Typography sx={{ p: 2, pt: 1, pb: 0 }}> {currentLight.info2} </Typography>
        

        <Card elevation={0}>
          <CardContent>
            <div>
              <Typography sx={{ p: 2, pl: 0, fontWeight: '700' }} variant="h5">Technical specs</Typography>
            </div>
          <div>
            <Typography variant="h6">Luminous Ratio:</Typography>
            <Typography paragraph sx={{ marginBottom: 1 }}>
              {currentLight.luminousRatio.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </Typography>
              <Typography variant="h6">Luminous Flux</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.luminousFlux}</Typography>
            </div>
            <div>
              <Typography variant="h6">Beam Angle</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.beamAngle}</Typography>
            </div>
            <div>
              <Typography variant="h6">Color Temperature</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.colorTemperature}</Typography>
            </div>
            <div>
              <Typography variant="h6">Temperature Range</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.temperatureRange}</Typography>
            </div>
            <div>
              <Typography variant="h6">Dimensions</Typography>
              <Typography paragraph sx={{ marginBottom: 1 }}>
                {currentLight.dimensions.split('\n').map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </Typography>
            </div>
            <div>
              <Typography variant="h6">Usage</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.usage}</Typography>
            </div>
            <div>
              <Typography variant="h6">Warranty</Typography>
              <Typography sx={{ marginBottom: 1 }}>{currentLight.warranty}</Typography>
            </div>
            <div>
              <Typography sx={{ fontWeight: '700', pt: 2 }} variant='h5'>Distance range graphs</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Accordion/>
      </div>
    </Fragment>
  );
};

export default Informations;
