import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
   const { user } = useContext(UserContext);

   if (!user) {
      return <h1 className="text-red-500 text-lg font-bold">Not Logged In</h1>;
   }

   return (
      <div className="text-center">
         <h1 className="text-xl font-bold text-gray-700">
            Welcome, {user.userName}!
         </h1>
      </div>
   );
};

export default Profile;

