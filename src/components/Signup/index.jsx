import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../requests';

const { Title } = Typography;

function Signup() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const updateData = (fieldName, val) => {
    setFormData({ ...formData, [fieldName]: val });
  };

  const signupClick = async () => {
    const resp = await signup(formData);
    if (resp) {
      navigate('/login');
    }
  };

  return (
    <div className="container f-width">
      <Title className="header-title" level={1}>
        Signup
      </Title>
      <div className="flex-row">
        <Input
          className="input-field"
          placeholder="First Name"
          onChange={e => updateData('firstName', e.target.value)}
        />
        <Input
          className="input-field"
          placeholder="Last Name"
          onChange={e => updateData('lastName', e.target.value)}
        />
      </div>
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
      <Input
        className="input-field"
        placeholder="Wallet Address"
        onChange={e => updateData('wallet_address', e.target.value)}
      />
      <Button type="primary" onClick={signupClick}>
        Signup
      </Button>
    </div>
  );
}

export default Signup;
