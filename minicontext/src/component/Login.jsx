import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const { setUser } = useContext(UserContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ userName, password });
   };

   return (
      <div>
         <h1 className="text-xl font-bold mb-4 text-gray-700">Login</h1>
         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
               type="text"
               placeholder="Name"
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
               className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
               type="submit"
               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default Login;