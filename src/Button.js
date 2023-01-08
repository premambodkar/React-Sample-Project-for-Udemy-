import React from 'react';
import buttons from './Button.module.css';
const Button = (props) => {
  return <button className={buttons.button}>{props.title}</button>;
};

export default Button;
