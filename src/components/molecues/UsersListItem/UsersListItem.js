import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Average } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo } from './UserListItem.styles';

//const showIndex = (index) => alert( `This is student #${ index+1 }` );

const UsersListItem = ({ /*index*/ deleteUser, userData: { average, name, attendance='0%'} }) => (
  <Wrapper>
    <Average value={average}>{average}</ Average>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </ StyledInfo>
    <DeleteButton onClick={() => deleteUser(name)} />
  </ Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
