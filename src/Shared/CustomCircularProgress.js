import { CircularProgress, Dialog, Slide } from '@mui/material';
import React from 'react';
import { bgdarkgray, bggold, bggrad, zubgtext } from './color';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CustomCircularProgress = ({ isLoading }) => {
  return (
    <Dialog
      open={isLoading}
      TransitionComponent={Transition}
      keepMounted
      // onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          background: bggrad,
          boxShadow: "none",
        },
        className: `!h-[4rem] !w-[4rem] !flex !justify-center !items-center`,

      }}
    >
      <CircularProgress sx={{ color: bgdarkgray }} className=" !z-50" />
    </Dialog >
  )
}

export default CustomCircularProgress
