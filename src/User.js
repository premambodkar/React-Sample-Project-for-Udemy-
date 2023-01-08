import React, { useState } from 'react';
import Card from './Card';
import users from './User.module.css';
import Button from './Button';

const User = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!userName && +age < 1) {
      return;
    } else if (!userName) {
      return;
    } else if (+age < 1) {
      return;
    }
    console.log(userName, age);
    setUserName('');
    setAge('');
  };

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChange = (event) => {
    setAge(event.target.value);
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
            value={userName}
            onChange={userNameChange}
          />
        </span>
        <span className={users.input}>
          <label htmlFor="age">Age(Years):</label>
          <input
            className={users.input}
            type="number"
            id="age"
            value={age}
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
