import React, { useState, useRef } from 'react';
import Card from '../common/Card.js';
import users from './User.module.css';
import Button from '../common/Button.js';
import ErrorModel from '../common/ErrorModel.js';

const User = (props) => {
  const [error, setError] = useState();
  const nameInput = useRef();
  const ageInput = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const userName = nameInput.current.value;
    const age = ageInput.current.value;

    if (!userName && +age < 1) {
      setError(true);
      return;
    } else if (!userName) {
      setError(true);
      return;
    } else if (+age < 1) {
      setError(true);
      return;
    }
    props.addUser({ name: userName, age: age });
  };

  const handleError = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModel
          title="Error Model"
          content="Error Content"
          onHandleError={() => {
            handleError();
          }}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <span className={users.input}>
            <label htmlFor="userName">Name:</label>
            <input type="text" id="userName" name="userName" ref={nameInput} />
          </span>
          <span className={users.input}>
            <label htmlFor="age">Age(Years):</label>
            <input
              className={users.input}
              type="number"
              id="age"
              name="age"
              ref={ageInput}
            />
          </span>
          <Button type="submit" title="Add User" />
        </form>
      </Card>
    </>
  );
};

export default User;
