import React from 'react';
import './style.css';
import User from './User/User.js';
import UserList from './User/UserList.js';

export default function App() {
  const users = [];
  return (
    <>
      <User />
      <UserList users={users} />
    </>
  );
}
