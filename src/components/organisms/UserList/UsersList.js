import { users } from 'data/users';
import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecues/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { StyledList } from './UserList.styles';
import { render } from 'node-sass';


const UsersList = () => {

return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem index={i} userData={userData} />
        ))}
      </ StyledList>
    </Wrapper>
);
};

export default UsersList;
