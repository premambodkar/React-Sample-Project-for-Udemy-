import React, { useState } from 'react';
import './style.css';
import User from './User/User.js';
import UserList from './User/UserList.js';
import ErrorModel from './common/ErrorModel.js';

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (data) => {
    console.log('data', data);
    setUsersList([...usersList, ...[data]]);
  };
  return (
    <>
      
      <User addUser={addUser} />
      <UserList users={usersList} />
      <ErrorModel title="Error Model" content="Error Content" />
    </>
  );
}
