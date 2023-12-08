/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import background from '../assets/lights/background.svg';

import wftr from '../assets/lights/wide front top right.svg';
import wftl from '../assets/lights/wide front top left.svg';
import wfbr from '../assets/lights/wide front bottom right.svg';
import wfbl from '../assets/lights/wide front bottom left.svg';
import wbtr from '../assets/lights/wide back top right.svg';
import wbtl from '../assets/lights/wide back top left.svg';
import wbbr from '../assets/lights/wide back bottom right.svg';
import wbbl from '../assets/lights/wide back bottom left.svg';

import sftr from '../assets/lights/spot front top right.svg';
import sftl from '../assets/lights/spot front top left.svg';
import sfbr from '../assets/lights/spot front bottom right.svg';
import sfbl from '../assets/lights/spot front bottom left.svg';
import sbtr from '../assets/lights/spot back top right.svg';
import sbtl from '../assets/lights/spot back top left.svg';
import sbbr from '../assets/lights/spot back bottom right.svg';
import sbbl from '../assets/lights/spot back bottom left.svg';

import hftr from '../assets/lights/hybrid front top right.svg';
import hftl from '../assets/lights/hybrid front top left.svg';
import hfbr from '../assets/lights/hybrid front bottom right.svg';
import hfbl from '../assets/lights/hybrid front bottom left.svg';
import hbtr from '../assets/lights/hybrid back top right.svg';
import hbtl from '../assets/lights/hybrid back top left.svg';
import hbbr from '../assets/lights/hybrid back bottom right.svg';
import hbbl from '../assets/lights/hybrid back bottom left.svg';

function RenderLight({ position }) {

  const type = position.type;
  const front = position.position[0];
  const top = position.position[1];
  const left = position.position[2];

  if (type == "wide") {
    if (front === "front") {
      if (top === "top") {
        if (left === "left") {
          var image = wftl
        } else {
          var image = wftr
        }
      } else {
        if (left === "left") {
          var image = wfbl
        } else {
          var image = wfbr
        }
      }
    } else {
      if (top === "top") {
        if (left === "left") {
          var image = wbtl
        } else {
          var image = wbtr
        }
      } else {
        if (left === "left") {
          var image = wbbl
        } else {
          var image = wbbr
        }
      }
    }
  } else if (type == "spot") {
    if (front === "front") {
      if (top === "top") {
        if (left === "left") {
          var image = sftl
        } else {
          var image = sftr
        }
      } else {
        if (left === "left") {
          var image = sfbl
        } else {
          var image = sfbr
        }
      }
    } else {
      if (top === "top") {
        if (left === "left") {
          var image = sbtl
        } else {
          var image = sbtr
        }
      } else {
        if (left === "left") {
          var image = sbbl
        } else {
          var image = sbbr
        }
      }
    }
  } else {
    if (front === "front") {
      if (top === "top") {
        if (left === "left") {
          var image = hftl
        } else {
          var image = hftr
        }
      } else {
        if (left === "left") {
          var image = hfbl
        } else {
          var image = hfbr
        }
      }
    } else {
      if (top === "top") {
        if (left === "left") {
          var image = hbtl
        } else {
          var image = hbtr
        }
      } else {
        if (left === "left") {
          var image = hbbl
        } else {
          var image = hbbr
        }
      }
    }
  
  }

  // säädä maxWidth ja maxHeight tarpeen mukaan, aseta tiedostossa
  // kaikki tiedoston maxWidthit ja maxHeightit samoiksi

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        zIndex: 1,
        maxWidth: '380px',
        maxHeight: '380px'
      }}
    >
      <img
        src={image}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </div>
  );
}

const RenderImage = ({ lightsList }) => {

  // input muotoa ["spot front top right", "hybrid back bottom left", "wide front top left"] jne

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '380px', maxHeight: '380px' }}> 
        <img
          src={background}
          style={{ width: '100%', height: '100%', objectFit: 'cover'}}
        />
      {lightsList.map((light, index) => (
        <RenderLight key={index} position={light} />
      ))}
      </div>
    </div>
  );
};

export default RenderImage;
