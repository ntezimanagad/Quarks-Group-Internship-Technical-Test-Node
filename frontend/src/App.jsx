import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [createData, setCreateData] = useState({ name: '', email: '' });
  const [userId, setUserId] = useState('');
  const [fetchedUser, setFetchedUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/users', createData);
      setMessage('User created successfully');
      setFetchedUser(res.data);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to create user');
    }
  };

  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${userId}`);
      setFetchedUser(res.data);
      setMessage('User fetched successfully');
    } catch (err) {
      setFetchedUser(null);
      setMessage(err.response?.data?.error || 'User not found');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>Create User</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Name"
          value={createData.name}
          onChange={(e) => setCreateData({ ...createData, name: e.target.value })}
          required
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={createData.email}
          onChange={(e) => setCreateData({ ...createData, email: e.target.value })}
          required
        />
        <br /><br />
        <button type="submit">Create</button>
      </form>

      <h2>Fetch User by ID</h2>
      <input
        type="text"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch</button>

      {message && (
        <p style={{ marginTop: '20px', color: message.includes('success') ? 'green' : 'red' }}>
          {message}
        </p>
      )}

      {fetchedUser && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Details</h3>
          <pre>{JSON.stringify(fetchedUser, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
