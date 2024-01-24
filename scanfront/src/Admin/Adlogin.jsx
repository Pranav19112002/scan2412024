import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import MasksIcon from '@mui/icons-material/Masks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adlogin() {
  var [inputs, setInputs] = useState({ "email": '', "password": '' })

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const navigate = useNavigate()

  const checkData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/admin/login",
        { email: inputs.email, password: inputs.password, })
      console.log(response.data)
      if (response.data.success) {
        alert('Login successful');
        navigate('/panel');
      }
      else {
        alert('Invalid email and Password. Please try again.');
        console.log(response.data);
      }
    }
    catch (err) { alert('Error occurred during login. Please try again.'); }
  };



  const btstyle1 = { margin: '8px 0', backgroundColor: 'green', color: 'white' };
  const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '20px auto' };
  const avatar1Style = { backgroundColor: 'green' };
  const linkStyle = { color: 'green', textDecoration: 'underline', marginRight: '4px' };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatar1Style}><MasksIcon /></Avatar>
            <h2>Log in</h2>
          </Grid>

          <TextField id="filled-basic" label="Email" name="email" value={inputs.email} onChange={inputHandler} fullWidth />
          <TextField id="filled-basic" label="Password" type='password' name='password' value={inputs.password} onChange={inputHandler} fullWidth />
          <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={checkData}>
            Login

          </Button>

          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Forgot Password ?'}
            </Link>
          </Typography>
          <p align='left'>Do you have an account ?</p>
          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Sign up'}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Adlogin;
