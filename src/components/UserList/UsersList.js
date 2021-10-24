import { users } from 'data/users';
import PropTypes from 'prop-types';
import UsersListItem from '../UserListItem/UserListItem';
import React from 'react';

const UserList = () => (
    <div>
        <ul>
            {users.map((userData) => (
                <UsersListItem userData={userData} />
            ))}
        </ul>
    </div>
);

UserList.PropTypes = {};

export default UserList;