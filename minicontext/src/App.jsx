import { useState } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  const [count, setCount] = useState(0);

  return (
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <UserContextProvider>
           <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-800">Count: {count}</h1>
              <button
                 onClick={() => setCount(count + 1)}
                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                 Increment
              </button>
           </div>
           <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <Login />
           </div>
           <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
              <Profile />
           </div>
        </UserContextProvider>
     </div>
  );
}

export default App;
