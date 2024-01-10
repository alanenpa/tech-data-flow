import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import YoutubeEmbed from './YoutubeEmbed'

import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import productiveCover from "../assets/accessories/Group 1000001840.svg";
import doubleFoot from "../assets/accessories/Group 1000001841.svg";
import installationGrommet from "../assets/accessories/Group 1000001842.svg";
import extendedFoot from "../assets/accessories/Group 1000001843.svg";

import test_cold from '../assets/tests/test_cold.pdf'
import test_env from '../assets/tests/test_env.pdf'
import test_water from '../assets/tests/test_water.pdf'
import test_emc from '../assets/tests/test_emc.pdf'
import manual from '../assets/tests/manual.pdf'


const RenderImage = ({ src, alt }) => {
  return <img style={{width: '100%'}} src={src} alt={alt} />;
};

const AccordionLine = ({ first, title, text, file, last }) => {
  return (
    <Card sx={{ mb: '2px', width: '100%', boxShadow: last ? '0px 0px 0px rgba(0, 0, 0, 0.1)' : '0px 2px 0px rgba(0, 0, 0, 0.1)'}}>
      <Typography variant='h6' sx={{ fontSize:'18px', pt: first ? '0px' : '12px', pl: '4px', width: '100%', fontWeight: '470' }}>
        {title}
      </Typography>
    
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: 0, pl: '4px', pr: '20px', pt: '0px', pb: '0px', width: '100%' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ maxWidth: '90%' }}>
            <Typography display="inline" color="text.secondary">
              {text}
            </Typography>
          </div>
        </div>
        <div>
        <a
          href={file}
          download={file}
          target="_blank"
          rel="noreferrer"
        >
        <Button size='small' variant='contained'

          endIcon={<FileDownloadOutlinedIcon />}
          sx={{ marginLeft: 'auto', marginBottom: '0px', marginRight: '5px', fontSize: 'small' }}
        >
          Download
        </Button>
        </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BasicAccordion() {
  return (
    <div>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '562' }}>Accessories</Typography>
        </AccordionSummary>
        <AccordionDetails>
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

        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '562' }}>Tests</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{pb: 0}}>
          <AccordionLine first title="Environmental" text="Tightness, vibration and heat tolerance" file={test_env}/>
          <AccordionLine title="Electromagnetic compatibility" text='Immunity to electromagnetic radiation' file={test_emc}/>
          <AccordionLine title="Water ingress" text="Watertightness against high-pressure water jets" file={test_water}/>
          <AccordionLine title="Cold start" text='Performance in temperatures as low as -67.5°C' last file={test_cold}/>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '562' }}>User manual</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{pb: 0}}>
        <Card sx={{ mb: '2px', width: '100%', boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: 0, pl: '4px', pr: '20px', pt: '0px', pb: '0px', width: '100%', height: '40px' }}>
            <Typography display="inline" color="text.secondary">
              Zaurac 4-30 Manual
            </Typography>
            <div>
            <a
              href={manual}
              download={manual}
              target="_blank"
              rel="noreferrer"
            >
            <Button size='small' variant='contained'

              endIcon={<FileDownloadOutlinedIcon />}
              sx={{ marginLeft: 'auto', marginBottom: '0px', marginRight: '5px', fontSize: 'small' }}
            >
              Download
            </Button>
            </a>
            </div>
          </CardContent>
        </Card>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '562' }}>Testimonials</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <YoutubeEmbed embedId="HYg_tmosTAE"/>
          <YoutubeEmbed embedId="-Bbp2stZj_U"/>
          <YoutubeEmbed embedId="O7vHotLcF20"/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
