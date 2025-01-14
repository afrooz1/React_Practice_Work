import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
   const { userid } = useParams();
   return (
      <div>
         <div>User: {userid}</div>
      </div>
   );
}

export default User;
