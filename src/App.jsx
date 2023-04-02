import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import cx from 'clsx';

import UserAuth from './components/UserAuth';
import MainNav from './components/MainNav';

import './App.scss';

const { Title } = Typography;

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const mainPage = location.pathname === '/' ? true : false;
  const loginOrSignup = ['/login', '/signup'].includes(location.pathname);

  const getStarted = () => {
    if (sessionStorage.getItem('email')) {
      navigate('/chat');
    } else {
      navigate('/signup');
    }
  };

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
          <Button type="primary" onClick={getStarted}>
            Get Started
          </Button>

          <Link to={'/chat'}>
            <Button type="link">Skip to Chat</Button>
          </Link>
        </Space>
      )}
      {loginOrSignup && <UserAuth />}
      {!mainPage && !loginOrSignup && <MainNav />}
      <Outlet />
    </div>
  );
}

export default App;
