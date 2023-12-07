import { Button, Card, CardContent, Grid, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete'
import RenderImage from "./RenderImage"
import { useState } from "react"

const Preview = () => {
  let { state } = useLocation()
  const [lightsList, setLightsList] = useState(state.lightsList)
  if (!state) {
    return (
      <Typography sx={{ mt: 10 }} display='flex' alignItems='center' justifyContent="center" variant='h6' >
        There are no items selected yet
      </Typography>
    )
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const removeLight = (index) => {
    console.log('removing')
    console.log(lightsList)
    const newList = lightsList.filter((light, i) =>
      i !== index
    )
    // console.log(lightsList)
    setLightsList(newList)
  }

  console.log('hello', lightsList)
  return (
    <Grid container sx={{ m: 'auto' }} direction='column' alignItems='center'>
      <Paper elevation={2}>
        <Grid item sx={{ p: 2 }} display='flex' justifyContent="center">
          <Typography variant='h6'>Preview</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Typography >Your preview images for selected products</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <List>
            {lightsList.map((light, index) =>
              <ListItem key={index}>
                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography variant='subtitle1'>Zaurac 4-30 {capitalize(light.type)}</Typography>
                    {light.position.map((pos, index) =>
                      index !== 2
                        ? <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">{pos}, </Typography>
                        : <Typography display="inline" key={index} variant='subtitle2' color="text.secondary">{pos}</Typography>
                    )}
                    <Button onClick={() => removeLight(index)} sx={{ float: 'right' }} ><DeleteIcon /></Button>
                  </CardContent>
                </Card>
              </ListItem>
            )}
          </List>
          <Grid item>
            <Typography sx={{ pl: 1, pb: 1, pt: 4 }} variant='h6'>Light simulation</Typography>
          </Grid>
          <Grid item>
            <RenderImage configurations={lightsList} />
          </Grid>
          <Grid item>
            <Typography sx={{ pl: 1, pb: 2, pt: 5 }} variant='h6'>Contact details</Typography>
          </Grid>
          <Grid item sx={{ mb: 3 }}>
            <TextField sx={{ width: '100%' }} label="Name" variant="outlined" />
          </Grid>
          <Grid item sx={{ mb: 3 }}>
            <TextField sx={{ width: '100%' }} label="Email" variant="outlined" />
          </Grid>
          <Grid item sx={{ mb: 3 }}>
            <TextField sx={{ width: '100%' }} label="Phone number" variant="outlined" />
          </Grid>
          <Grid item sx={{ mb: 3 }}>
            <TextField sx={{ width: '100%' }} label="Company" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: '100%' }}
              label="Detailed request"
              multiline
              rows={5}
            />
          </Grid>
          <Grid item sx={{ mt: 5, mb: 3 }} display='flex' justifyContent="center">
            <Link to='/finish'><Button variant='contained'>Request a quote</Button></Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Preview