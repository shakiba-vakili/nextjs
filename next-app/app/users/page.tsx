import React from 'react';

// Define the User interface to type the user data
interface User {
    id: number;
    name: string;
}

// Define the UsersPage component as an asynchronous function
const UsersPage = async () => {
    // Fetch data from the API with revalidation interval set to 10 seconds
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
    // {
    //     // Get fresh data every 10 seconds
    //     next: { revalidate: 10 }
    // }
    {
        //  if you use this the next js undrestand that this page is not static and the data may change
        cache: 'no-store'
    }
);
    
    // Parse the JSON response and type it as an array of User objects
    const users: User[] = await res.json();
    
    // Return the JSX to render the list of users
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    );
};

// Export the UsersPage component as the default export
export default UsersPage;
