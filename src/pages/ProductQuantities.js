import hybrid from '../assets/button_hybrid-light-on.svg';
import spot from '../assets/button_spot-light-on.svg';
import wide from '../assets/button_wide-light-on.svg'

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ image, title }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrease = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrease = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <Card sx={{ mb: 2, height: '120px', width: '100%', boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          <img
            src={image}
            alt={`${title} icon`}
            style={{ width: '90px', height: '90px', marginRight: '10px' }}
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

const ProductQuantities = () => {
  return (
    <div>
      <ProductCard image={wide} title="Zaurac 4-30 Wide" />
      <ProductCard image={spot} title="Zaurac 4-30 Spot" />
      <ProductCard image={hybrid} title="Zaurac 4-30 Hybrid" />
    </div>
  );
};

export default ProductQuantities;