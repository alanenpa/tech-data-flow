import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@mui/material';

const SimplePopup = ({ isOpen, message }) => {
  const [dialogRight, setDialogRight] = useState(Math.max(0, (window.innerWidth - 430)));

  useEffect(() => {
    const handleResize = () => {
      setDialogRight(Math.max(0, (window.innerWidth - 430)));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <Dialog open={isOpen} onClose={() => {}} disableScrollLock={false} style={{ right: `${dialogRight}px` }}>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
    </Dialog>
  );
};

export default SimplePopup;
