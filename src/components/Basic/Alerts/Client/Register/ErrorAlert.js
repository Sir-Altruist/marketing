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

export default function ErrorAlert() {

  const classes = useStyles();
  const clientRegister = useSelector(state => state.clientRegisterReducer)
  const {error} = clientRegister
  


  const [open, setOpen] = useState(true)

  return (
    <div className={classes.root}>
       <Collapse in={open}>
  <Alert
  severity='error'
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
    <p>{error}</p>
  </Alert>
</Collapse>   
    </div>
  );
}