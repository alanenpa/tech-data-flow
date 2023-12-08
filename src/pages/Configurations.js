import { Button, Typography, List, ListItem, Card, CardContent, capitalize } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const Configurations = ({ lightsList, removeLight }) => {
    if (lightsList.length == 0) {
      return
    }
    return (
      <>

        <List>
          {lightsList.map((light, index) => (
            <ListItem key={index}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant='subtitle1'>Zaurac 4-30 {capitalize(light.type)}</Typography>
                  {light.position.map((pos, index) =>
                    index !== 2 ? (
                      <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">
                        {pos},{' '}
                      </Typography>
                    ) : (
                      <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">
                        {pos}
                      </Typography>
                    )
                  )}
                  <Button onClick={() => removeLight(index)} sx={{ float: 'right' }}>
                    <DeleteIcon />
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
