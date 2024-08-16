import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import UserCard from './UserCard';
import { LoadingIndicator } from './LoadingIndicator';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://bytive-assignment3-1kcr.onrender.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching the users:', error));
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  }, []);

  const handleUpdate = (userId, updatedData) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user._id === userId ? { ...user, ...updatedData } : user
      )
    );
  };

  const handleDelete = (userId) => {
    setUsers(prevUsers =>
      prevUsers.filter(user => user._id !== userId)
    );
  };

  return (
    <>
    {loading ? (
      <LoadingIndicator/>
    ):(
      <Row gutter={[16, 16]}>
      {users.map(user => (
        <Col key={user._id}>
          <UserCard user={user} onUpdate={handleUpdate} onDelete={handleDelete} />
        </Col>
      ))}
    </Row>
    )}
  </>
);
};

export default UserList;
