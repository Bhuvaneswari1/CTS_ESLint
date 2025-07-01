import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  return (
    <div className='card p-3'>
      <h5>Friend List</h5>
      <ul className='list-group list-group-flush'>
        {friends.map((friend)=>(
          <li className='list-group-item' key={friend.id}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FriendList;