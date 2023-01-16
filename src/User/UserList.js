import React, { useState } from 'react';
import classes from './User.module.css';

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((item) => {
        return (
          <li>
            {item.name}
            <span>{item.age}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
