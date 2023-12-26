import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import YoutubeEmbed from './YoutubeEmbed'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const AccordionLine = ({ title, last }) => {
  const handleDownload = () => {
    // Add your download logic here
    console.log('Download button clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        pb: last ? 0 : 3,
        border: 0,
        borderRadius: 1,
        borderColor: 'primary.main', // You can customize the borderColor if needed
      }}
    >
      <Typography sx={{ maxWidth: '45%' }}>{title}</Typography>
      <Button
        variant="contained"
        endIcon={<FileDownloadOutlinedIcon />}
        onClick={handleDownload}
      >
        Download
      </Button>
    </Box>
  );
};

export default function BasicAccordion() {
  return (
    <div>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '500' }}>Tests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionLine title="Vibration test"/>
          <AccordionLine title="Electromagnetic compatibility test"/>
          <AccordionLine title="Water test"/>
          <AccordionLine title="Cold test"/>
          <AccordionLine title="Environmental test" last/>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '500' }}>Manuals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionLine title="Manual - Zaurac 4-30 Wide light"/>
          <AccordionLine title="Manual - Zaurac 4-30 Spot light"/>
          <AccordionLine title="Manual - Zaurac 4-30 Hybrid light" last/>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{ fontWeight: '500' }}>Testimonials</Typography>
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
