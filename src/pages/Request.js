import { Button, Card, CardContent, Grid, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import DeleteIcon from '@mui/icons-material/Delete'
import RenderImage from "./RenderImage"
import React, { useState, Fragment } from "react"
import ProductQuantities from "./ProductQuantities"

const Request = () => {
  

  return (
    <Fragment>
      <Navbar/>
        <Grid item sx={{ p: 2 }}>
          <Typography variant='h6'>Contact details</Typography>
          <TextField InputProps={{style: {borderRadius: '25px'}}} sx={{ width: '100%', mb: 3, mt: 5 }} label="Name" variant="outlined" />
          <TextField InputProps={{style: {borderRadius: '25px'}}} sx={{ width: '100%', mb: 3 }} label="Email" variant="outlined" />
          <TextField InputProps={{style: {borderRadius: '25px'}}} sx={{ width: '100%', mb: 3 }} label="Phone number" variant="outlined" />
          <TextField InputProps={{style: {borderRadius: '25px'}}} sx={{ width: '100%', mb: 3 }} label="Company" variant="outlined" />
          <Typography sx={{m:1}}>Product quantity preferences</Typography>
          <ProductQuantities lightsList={[]}/>
          <TextField InputProps={{style: {borderRadius: '25px'}}} sx={{ width: '100%', mb: 3, mt: 2 }} label="Detailed request" multiline rows={5} />
          <Grid item sx={{ mt: 5, mb: 3 }}>
            <Link to='/finish'>
              <Button sx={{ width: '100%' }} variant='contained'>
                Send request
              </Button>
            </Link>
          </Grid>
        </Grid>
    </Fragment>


  )
}

export default Request