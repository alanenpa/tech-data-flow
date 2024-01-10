import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@mui/material";
import front from '../assets/4_9_cropped.jpg';

const Model = () => {
  const [iframeClicked, setIframeClicked] = useState(false);
  const [dialogRight, setDialogRight] = useState(Math.max(0, (window.innerWidth - 430)));


  const handleClick = () => {
    setIframeClicked(!iframeClicked);
  };

  const handleClose = () => {
    setIframeClicked(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setDialogRight(Math.max(0, (window.innerWidth - 430)));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const containerStyle = {
    width: '100vw',
    maxWidth: '430px',
    overflow: 'hidden',
    position: 'relative',
    height: 'auto',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    transform: 'scaleX(-1) scaleY(-1)'
  };

  const overlayStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    backgroundColor: 'transparent',
    zIndex: '1',
  };

  return (
    <div style={containerStyle}>
      <img src={front} style={imageStyle} alt="Model Front View" />

      {!iframeClicked && <div style={overlayStyle} onClick={handleClick}></div>}

      <Dialog open={iframeClicked} onClose={handleClose} style={{ right: `${dialogRight}px` }}>
        <DialogContent style={{ overflow: 'hidden', padding: '0px' }}>
          <iframe
            src="https://www.3dmotion.it/LED.37/LED.37.html"
            allowFullScreen
            style={{ width: '100%', height: '300px', border: 'none', transform: 'scaleX(-1) scaleY(-1)', marginTop: '25px' }}
            scrolling="no"
            title="embedded-iframe"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Model;