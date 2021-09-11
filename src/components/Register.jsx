import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';


export default function RegisterForm({handleClose}) {


  return (
    <React.Fragment>
      <form>
        <Typography variant="h6" gutterBottom>
          REGISTRATION FORM 
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
              label="Email-id"
              fullWidth
             
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="College Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Branch"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  label="Year" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
           
              label="Phone Number"
              fullWidth
            
            />
          </Grid>
        </Grid> 
      </form>
    </React.Fragment>
  );
}
