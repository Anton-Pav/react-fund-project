import React from 'react';
import s from './MyInput.module.css'

const MyInput = (props) => {
    return (
       <input className={s.myInpt} {...props}/>
    );
};

export default MyInput;