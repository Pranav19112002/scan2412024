import { Button, TextField } from '@mui/material'
import React from 'react'
import './Editscanning.css'; 

const Editscanning = () => {


  return (
    <div className="form-container">
    <h1 className="form-heading">EDIT SCANNING</h1>

    <TextField className="form-field" id="outlined-basic" placeholder='Id' name="sid"  variant="outlined" />
    <br /><br />
    <TextField className="form-field" id="outlined-basic" placeholder='Name' name="sname"  variant="outlined" />
    <br /><br />
    <textarea className="form-field" id="outlined-basic" placeholder='Description' name="sdescription"  variant="outlined" />
    <br /><br />
    <TextField className="form-field" type='number' id='outlined-basic' placeholder='Amount' name='samount'variant='outlined' />
    <br /><br />
    <Button variant="contained">Edit</Button>
    </div>

  )
}

export default Editscanning