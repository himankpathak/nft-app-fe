import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import cx from 'clsx';


import './App.scss';

const { Title } = Typography;

function App() {
  const location = useLocation();

  const mainPage = location.pathname === '/' ? true : false;
  const loginOrSignup = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="App">
      <Title
        className={cx('header-title logo', mainPage && 'main-page')}
        level={1}
      >
        NFT App
      </Title>
      {mainPage && (
        <Space direction="vertical">
          <Link to={'/signup'}>
            <Button type="primary">Get Started</Button>
          </Link>
          <Link to={'/chat'}>
            <Button type="link">Skip to Chat</Button>
          </Link>
        </Space>
      )}
      <Outlet />
    </div>
  );
}

export default App;
