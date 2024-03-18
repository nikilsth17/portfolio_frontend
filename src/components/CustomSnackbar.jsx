import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { setOpen } from '../store/slice/snackbarSlice';
const CustomSnackbar = () => {
    const { open, severity, message } = useSelector((state) => state.snackbar);


    const dispatch = useDispatch();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(setOpen(false));
    };
  
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
  
      </Snackbar>
  
    );
}

export default CustomSnackbar