import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

const SimplePopup = ({ isOpen, message }) => {

  return (
    <Dialog open={isOpen} onClose={() => {}} disableScrollLock={false}>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
    </Dialog>
  );
};

export default SimplePopup;
