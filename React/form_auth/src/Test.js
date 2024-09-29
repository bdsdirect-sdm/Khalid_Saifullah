import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default function Test() {
//   const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField sx={{ width: 400 }} id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
