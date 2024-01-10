import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import hybrid from '../assets/button_hybrid-light-on.svg';
import spot from '../assets/button_spot-light-on.svg';
import wide from '../assets/button_wide-light-on.svg'

const ProductCard = ({ image, title, quantity }) => {
  const [itemCount, setItemCount] = useState(quantity);

  const handleIncrease = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrease = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <Card sx={{ mb: 1, height: '100px', width: '100%', boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          <img
            src={image}
            alt={`${title} icon`}
            style={{ width: '70px', height: '70px', marginRight: '10px' }}
          />
          <div>
            <Typography variant='subtitle1'>{title}</Typography>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <div
            style={{
              border: '1px solid #000000',
              borderRadius: '4px',
              padding: '4px',
              margin: '0 8px',
            }}
          >
            <Typography variant="body1">{itemCount}</Typography>
          </div>
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductQuantities = ({ quantities }) => {
  return (
    <div>
      <ProductCard image={wide} title="Zaurac 4-30 Wide" quantity={quantities["wide"]} />
      <ProductCard image={spot} title="Zaurac 4-30 Spot" quantity={quantities["spot"]}/>
      <ProductCard image={hybrid} title="Zaurac 4-30 Hybrid" quantity={quantities["hybrid"]}/>
    </div>
  );
};

export default ProductQuantities;