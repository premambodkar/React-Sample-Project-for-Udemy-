import React from 'react';
import Card from './Card';
import users from './User.module.css';
import Button from './Button';

const User = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={submitForm}>
        <span className={users.input}>
          <label htmlFor="userName">Name:</label>
          <input type="text" id="userName" name="userName" />
        </span>
        <span className={users.input}>
          <label htmlFor="age">Age(Years):</label>
          <input className={users.input} type="number" id="age" name="age" />
        </span>
        <Button type="submit" title="Add User" />
      </form>
    </Card>
  );
};

export default User;
