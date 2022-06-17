import React from 'react'
import Button from '@mui/material/Button';




function SmButtton(props) {
    const {label,onClick} = props;
    return (

        <Button onClick= {onClick}  variant="contained">{label}</Button>
        
    )
}

export default SmButtton;
