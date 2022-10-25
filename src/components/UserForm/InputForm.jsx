import React from 'react';
import './InputForm.css';

export default function InputForm(props){
  return (
    <div className='inputContainer'>
      <label className='label'>{props.title}</label>
      <input 
        className='input'
        value={props.value} 
        required={props.required} 
        name={props.name} 
        type="text" 
        onChange={props.onChange} 
        placeholder={props.placeholder} />
    </div>
  )
}