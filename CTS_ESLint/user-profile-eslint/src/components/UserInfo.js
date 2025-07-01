import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({user}) => {
  return (
    <div className='card mb-3 p-3'>
      <p><strong>Username: </strong>{user.username}</p>
      <p><strong>Email: </strong>{user.email}</p>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string
  }).isRequired
};

export default UserInfo;