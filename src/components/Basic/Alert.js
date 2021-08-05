// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';
// import IconButton from '@material-ui/core/IconButton';
// import Collapse from '@material-ui/core/Collapse';
// import CloseIcon from '@material-ui/icons/Close';
// import { useSelector } from 'react-redux'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function Alerts() {

//   const classes = useStyles();
//   const productMessage = useSelector(state => state.productUploadReducers)
//   const {loading, error, products} = productMessage


//   const [open, setOpen] = useState(true);
//   const showAlert = error || products ? 
//     <Collapse in={open}>
//   <Alert
//   severity={error ? 'error' : products ? 'success' : null}
//     action={
//       <IconButton
//         aria-label="close"
//         color="inherit"
//         size="small"
//         onClick={() => {
//           setOpen(false);
//         }}
//       >
//         <CloseIcon fontSize="inherit" />
//       </IconButton>
//     }
//   >
//     {error && <p>{error}</p>}
//     {products && <p>{products}</p>}
//   </Alert>
// </Collapse> : loading ? <h5>Loading...</h5> : null

//   return (
//     <div className={classes.root}>
//          {showAlert}    
//     </div>
//   );
// }