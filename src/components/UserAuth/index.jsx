import React, { useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

function UserAuth() {
  const items = [
    {
      label: 'Signup',
      key: 'signup',
    },
    {
      label: 'Login',
      key: 'login',
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(location.pathname.substring(1));

  const onClick = e => {
    if (e.key !== current) {
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

export default UserAuth;
