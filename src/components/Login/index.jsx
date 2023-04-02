import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { login } from '../../requests';

const { Title } = Typography;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const updateData = (fieldName, val) => {
    setFormData({ ...formData, [fieldName]: val });
  };

  const loginClick = async () => {
    const resp = await login(formData);
    if (resp) {
      sessionStorage.setItem('email', formData.email);
      return navigate('/chat');
    }
  };

  return (
    <div className="container">
      <Title className="header-title" level={1}>
        Login
      </Title>
      <Input
        className="input-field"
        placeholder="Email"
        onChange={e => updateData('email', e.target.value)}
      />
      <Input.Password
        className="input-field"
        placeholder="Password"
        onChange={e => updateData('password', e.target.value)}
      />
      <Button type="primary" onClick={loginClick}>
        Login
      </Button>
    </div>
  );
}

export default Login;
