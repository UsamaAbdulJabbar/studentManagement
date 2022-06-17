import React from 'react'
import TextField from '@mui/material/TextField';

function SmInput(props) {
    const {value,label,type,onChange} = props;
  return (
    <TextField autoComplete='off'  id="outlined-basic" label={label} onChange={onChange} value={value} type={type} variant="outlined" />
  )
}

export default SmInput
