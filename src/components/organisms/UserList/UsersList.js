import { users as usersData } from 'data/users';
import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecues/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { StyledList } from './UserList.styles';


const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

useEffect(() => {
  setLoadingState(true);
  mockAPI()
    .then((data) => {
      setLoadingState(false);
      setUsers(data);
    })
    .catch((err) => console.log(err));
}, []);

const deleteUser = (name) => {
  const filtredUsers = users.filter((user) => user.name !== name);
  setUsers(filtredUsers);
};

return (
    <Wrapper>
      <h1>{isLoading ? '... Loading' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </ StyledList>
    </Wrapper>
);
};

export default UsersList;
