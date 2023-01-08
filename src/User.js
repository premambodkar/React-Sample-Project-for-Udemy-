import React from 'react';
import Card from './Card';
import users from './User.module.css';

const User = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input
          className={users.users}
          type="text"
          id="userName"
          name="userName"
        />
        <label htmlFor="age">Age(Years):</label>
        <input className={users.users} type="number" id="age" name="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default User;
