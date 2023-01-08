import React, { useState } from 'react';
import Card from './Card';
import users from './User.module.css';
import Button from './Button';

const User = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName && userName.trim().length === 0 && +age < 1) {
      return;
    } else if (userName && userName.trim().length === 0) {
      return;
    } else if (+age < 1) {
      return;
    }
    console.log(userName, age);
    setUserName('');
    setAge(0);
  };

  const userNameChange = (event) => {
    setUserName(event);
  };

  const userAgeChange = (event) => {
    setAge(event);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <span className={users.input}>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={userNameChange}
          />
        </span>
        <span className={users.input}>
          <label htmlFor="age">Age(Years):</label>
          <input
            className={users.input}
            type="number"
            id="age"
            name="age"
            onChange={userAgeChange}
          />
        </span>
        <Button type="submit" title="Add User" />
      </form>
    </Card>
  );
};

export default User;
