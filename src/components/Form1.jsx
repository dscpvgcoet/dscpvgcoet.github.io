/* import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import RegisterForm from './Register';
import Button from '@material-ui/core/Button';
// or
//import { Button } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {


  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Form1() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">REGISTER</h2>

      <p id="simple-modal-description">
        {<RegisterForm handleClose={handleClose}/>
        }

      </p>
  //    {/* <Form1 /> */
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//             Sign Me up
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }
//  */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegisterForm from './Register';

export default function FormDialog() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       SIGN UP 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">EVENT NAME </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form>
            <RegisterForm/>
              </form>
          
          </DialogContentText>
         {/*  <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}