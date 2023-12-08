import { Button, Card, CardContent, Grid, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete'
import RenderImage from "./RenderImage"
import { useState } from "react"

const Request = () => {
  /*let { state } = useLocation()
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
    const newList = lightsList.filter((light, i) =>
      i !== index
    )
    setLightsList(newList)
  }*/

  return (
  <Grid item sx={{ p: 2 }}>
    <Typography sx={{ pl: 1, pb: 2, pt: 5 }} variant='h6'>Contact details</Typography>
    <TextField sx={{ width: '100%', mb: 3, mt: 3 }} label="Name" variant="outlined" />
    <TextField sx={{ width: '100%', mb: 3 }} label="Email" variant="outlined" />
    <TextField sx={{ width: '100%', mb: 3 }} label="Phone number" variant="outlined" />
    <TextField sx={{ width: '100%', mb: 3 }} label="Company" variant="outlined" />
    <TextField sx={{ width: '100%', mb: 3 }} label="Detailed request" multiline rows={5} />
    <Grid item sx={{ mt: 5, mb: 3 }}>
      <Link to='/finish'>
        <Button sx={{ width: '100%' }} variant='contained'>
          Send request
        </Button>
      </Link>
    </Grid>
  </Grid>

  )
}

export default Request