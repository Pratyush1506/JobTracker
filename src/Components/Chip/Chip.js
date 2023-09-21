import React from 'react'
import './Chip.css'
import { X } from 'react-feather'

function Chip(props) {
  return (
    <div className='chip' style={{backgroundColor: props.color}}>
        {props.text}
        {props.close && <X />}
    </div>
  )
}

export default Chip