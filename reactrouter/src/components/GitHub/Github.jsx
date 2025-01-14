import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-center m-4 bg-red-600 text-white p-4 text-2xl">
        <p>Error loading GitHub data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github followers: {data.followers}</p>
      <img src={data.avatar_url} alt="GitHub profile" width={300} />
    </div>
  );
}

export default Github;

// Loader function with error handling
export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error; // Throwing error to be caught by the route's error boundary
  }
};
