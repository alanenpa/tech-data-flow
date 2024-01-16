import { Button, Typography, List, ListItem, Card, CardContent, capitalize } from '@mui/material';

import trashcan from '../assets/delete.png';

import hybrid from '../assets/button_hybrid-light-on.svg';
import spot from '../assets/button_spot-light-on.svg';
import wide from '../assets/button_wide-light-on.svg';

const imageMapping = {
  'hybrid': hybrid,
  'spot': spot,
  'wide': wide,
};

const Configurations = ({ lightsList, removeLight }) => {
  if (lightsList.length === 0) {
    return;
  }

  return (
    <>
      <List sx={{ py: 0 }}>
        {lightsList.map((light, index) => (
          <ListItem key={index}>
            <Card sx={{ mb: 0, height: '100px', width: '100%', boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '13px' }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                  <img
                    src={imageMapping[light.type]}
                    alt={`${light.type} icon`}
                    style={{ width: '75px', height: '75px', marginRight: '25px' }}
                  />
                  <div>
                    <Typography fontSize='13px' fontWeight='720'  variant='subtitle1'>Zaurac 4-30 {capitalize(light.type)}</Typography>
                    {light.position.map((pos, index) =>
                      index !== 2 ? (
                        <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">
                          {capitalize(pos)},{' '}
                        </Typography>
                      ) : (
                        <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">
                          {capitalize(pos)}
                        </Typography>
                      )
                    )}
                  </div>
                </div>
                <Button onClick={() => removeLight(index)}>
                  <img src={trashcan} />
                </Button>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Configurations;
