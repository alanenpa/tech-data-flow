import React, { Fragment } from "react";
import { Link, useLocation } from 'react-router-dom'; 
import { Button, Grid, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ProductQuantities from "./ProductQuantities";

const Request = () => {
  const location = useLocation();

  const lightsList = location.state?.lightsList || [];

  let i = 0;
  let quantities = {"wide": 0, "spot": 0, "hybrid": 0};

  while (i < lightsList.length) {
    quantities[lightsList[i].type] += 1
    i++;
}

  return (
    <Fragment>
      <Navbar />
      <Typography variant='h6' sx={{ paddingBottom: 1, fontSize: '30px', textAlign: 'center' }}>
        Contact details
      </Typography>

      <Grid container direction="column" alignItems="left" sx={{ p: 2, pt: 0 }}>
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3, mt: 5 }} label="Name" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Email" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Phone number" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Company" variant="outlined" />
        <Typography sx={{ m: 1 }}>Product quantity preferences</Typography>
        <ProductQuantities quantities={quantities} />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3, mt: 2 }} label="Detailed request" multiline rows={5} />
        <Grid item sx={{ mt: 0, mb: 3 }}>
          <Link to='/finish'>
            <Button                   
                  sx={{
                    width: '100%',
                    m: 0,
                    height: '60px',
                    borderRadius: '10px',
                    border: '4px solid gray',
                    color: 'gray',
                    fontSize: '16px',
                    fontWeight: '600'
                  }} variant='contained'>
              Send request
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Request;
