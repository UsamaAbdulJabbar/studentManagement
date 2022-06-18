import React from 'react'
import Button from '@mui/material/Button';




function SmButtton(props) {
    const {label,onClick,color,onChange} = props;
    return (

        <Button onChange={onChange} onClick= {onClick} color={color} variant="contained">{label}</Button>
        
    )
}

export default SmButtton;
