import React from 'react';

// Define the User interface to type the user data
interface User {
    id: number;
    name: string;
    email: string;
}

// Define the UsersPage component as an asynchronous function
const UsersPage = async () => {
    // Fetch data from the API, specifying no cache to ensure fresh data on each request
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
    {
        // This tells Next.js that this page is not static and the data may change
        cache: 'no-store'
    });

    // Parse the JSON response and type it as an array of User objects
    const users: User[] = await res.json();
    
    // Return the JSX to render the list of users in a table format
    return (
        <>
            <h1>Users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Iterate over the users array and render each user's name and email in a table row */}
                    {users.map(user => 
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

// Export the UsersPage component as the default export
export default UsersPage;
