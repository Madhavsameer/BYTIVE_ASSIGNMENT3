import React from 'react';
import { Layout } from 'antd';
import UserList from './components/UserList';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <div className="site-layout-content">
          <UserList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
