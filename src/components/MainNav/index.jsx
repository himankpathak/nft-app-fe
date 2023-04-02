import React, { useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

function MainNav() {
  const items = [
    {
      label: 'Home',
      key: 'chat',
    },
    {
      label: 'Earned NFTs',
      key: 'nft',
    },
    sessionStorage.getItem('email')
      ? {
          label: 'Logout',
          key: 'logout',
        }
      : {
          label: 'Login',
          key: 'login',
        },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(location.pathname.substring(1));

  const onClick = e => {
    if (e.key !== current) {
      if (e.key === 'logout') {
        sessionStorage.removeItem('email');
        return navigate('/');
      }

      setCurrent(e.key);
      return navigate('/' + e.key);
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
    />
  );
}

export default MainNav;
