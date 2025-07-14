import { useContext } from 'react';
import UserContext from '../UserContext'; // or './UserContext' depending on your file structure

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
