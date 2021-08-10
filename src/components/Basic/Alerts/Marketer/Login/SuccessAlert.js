import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuccessAlert() {

  const classes = useStyles();
  const marketerLogin = useSelector(state => state.marketerLoginReducer)
  const { marketerInfo } = marketerLogin


  const [open, setOpen] = useState(true)
   
  return (
    <div className={classes.root}>
          <Collapse in={open}>
  <Alert
  severity='success'
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <p>{marketerInfo.msg}</p>
  </Alert>
</Collapse>  
    </div>
  );
}