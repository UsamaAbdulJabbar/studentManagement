import React from 'react'
import Button from '@mui/material/Button';




function SmButtton(props) {
    const {start,label,onClick,color,onChange} = props;
    return (

        <Button start={start} onChange={onChange} onClick= {onClick} color={color} variant="contained">{label}</Button>
        
    )
}

export default SmButtton;
