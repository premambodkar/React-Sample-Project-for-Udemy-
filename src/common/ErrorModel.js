import React from 'react';
import classes from './ErrorModal.module.css';
import Button from '../Button.js';
import Card from '../Card.js';
const ErrorModel = (props) => {
  return (
    <Card className={classes.model}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button title="Okey"></Button>
      </footer>
    </Card>
  );
};

export default ErrorModel;
