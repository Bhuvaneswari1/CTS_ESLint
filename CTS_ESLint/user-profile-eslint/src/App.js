import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import FriendList from './components/FriendList';

function App() {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/user')
    .then(res=>res.json())
    .then(data=>setUser(data))
    .catch(err=>console.error('Failed to fetch user:',err));

    fetch('http://localhost:3001/friends')
    .then(res=>res.json())
    .then(data=>setFriends(data))
    .catch(err=>console.error('Failed to fetch friends: ',err));
  },[]);

  // eslint-disable-next-line react/react-in-jsx-scope
  if(!user) return <p>Loading...</p>;
  return (
    <div className="container mt-4">
      <Greeting name={user.username} />
      <UserInfo user={user} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
