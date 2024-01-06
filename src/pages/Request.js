import React, { Fragment } from "react";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ProductQuantities from "./ProductQuantities";

import productiveCover from "../assets/accessories/Group 1000001840.svg";
import doubleFoot from "../assets/accessories/Group 1000001841.svg";
import installationGrommet from "../assets/accessories/Group 1000001842.svg";
import extendedFoot from "../assets/accessories/Group 1000001843.svg";

const RenderImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

const Request = () => {
  return (
    <Fragment>
      <Navbar />
      <Grid container direction="column" alignItems="left" sx={{ p: 2 }}>
        <Typography variant='h6'>Contact details</Typography>
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3, mt: 5 }} label="Name" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Email" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Phone number" variant="outlined" />
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3 }} label="Company" variant="outlined" />
        <Typography sx={{ m: 1 }}>Product quantity preferences</Typography>
        <ProductQuantities lightsList={[]} />
        <Typography sx={{ m: 1, mb: 4 }}>Accessories</Typography>
        <Grid container spacing={2}>
          {[
            { id: 1, image: productiveCover },
            { id: 2, image: doubleFoot },
            { id: 3, image: installationGrommet },
            { id: 4, image: extendedFoot },
          ].map((accessory) => (
            <Grid item key={accessory.id}>
              <RenderImage src={accessory.image} alt={`Accessory ${accessory.id}`} />
            </Grid>
          ))}
        </Grid>
        <TextField InputProps={{ style: { borderRadius: '25px' } }} sx={{ width: '100%', mb: 3, mt: 2 }} label="Detailed request" multiline rows={5} />
        <Grid item sx={{ mt: 5, mb: 3 }}>
          <Link to='/finish'>
            <Button sx={{ width: '100%' }} variant='contained'>
              Send request
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Request;
