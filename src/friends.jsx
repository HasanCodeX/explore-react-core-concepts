import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend'; // Correctly importing the Friend component

export default function Friends() {
  const [friends, setFriends] = useState([]); // Proper setter function for friends state

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data); // Update state with fetched data
        console.log(data); // Debugging log
      })
      .catch((error) => console.error('Error fetching data:', error)); // Handle errors
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3> {/* Display count of friends */}
  
      {friends.map((friend) => (
        <Friend key={friend.id} title={friend.title} /> // Proper JSX with correct syntax
      ))}
    </div>
  );
}
