import React from 'react';
import classes from './UsersList.module.css';
import Card from '../common/Card';

const UserList = (props) => {
  return (
    <Card>
      <div className={classes.users}>
        <ul>
          {props.users.map((item, index) => {
            return (
              <li key={index}>
                {item.name}
                <span>{item.age}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
