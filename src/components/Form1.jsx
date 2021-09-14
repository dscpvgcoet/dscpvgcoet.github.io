import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export default function FormDialog({isOpen}) {


  const [open, setOpen] = React.useState(isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [registration,setResgistration] = useState({
    "First name" : "",
    "Last name" : "",
    "Email-id" : "",
    "College Name" : "",
    "Branch" : "",
    "Year" : "",
    "Phone Number" : ""
    
  })

  const handleChange = (e)=>{
    setResgistration({
      ...registration,
      [e.target.name] : e.target.value
    })
    console.log(registration)
  }

  const handleSubmit = (e)=>{
    console.log(registration)
  }

  return (
    <div>
      <div onClick={handleClickOpen} className="primary-button">

      <p className="h6 blue" >Register Now !</p>


      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">EVENT NAME </DialogTitle>
        <DialogContent onChange={handleChange}>
          <DialogContentText>
          <FormControl onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              REGISTRATION FORM 
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="First name"
                  label="First name"
                  fullWidth
                  onChange={handleChange}
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="Last name"
                  label="Last name"
                  onChange={handleChange}
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                required
                  label="Email-id"
                  name = "Email-id"
                  onChange={handleChange}
                  fullWidth
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="College Name"
                  name="College Name"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  labelId="branch-label"
                  name="Branch"
                  label="Branch"
                  fullWidth
                  onChange={handleChange}
                  value={registration["Branch"]}
                  defaultValue="Branch"
                >
                  <MenuItem value="CS">CS</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Mech">Mech</MenuItem>
                  <MenuItem value="Entc">Entc</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                {registration["Branch"] === "Other" && <TextField
                  label="Branch"
                  name="Other Branch"
                  fullWidth
                  onChange={handleChange}
                />}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                    labelId="branch-label"
                    name="Year"
                    label="Year"
                    fullWidth
                    onChange={handleChange}
                    value={registration["Year"]}
                    defaultValue="Year"
                  >
                    <MenuItem value="FE">FE</MenuItem>
                    <MenuItem value="SE">SE</MenuItem>
                    <MenuItem value="TE">TE</MenuItem>
                    <MenuItem value="BE">BE</MenuItem>
                  </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Phone Number"
                  label="Phone Number"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid> 
          </FormControl>
          
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
          <Button onClick={handleSubmit} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}