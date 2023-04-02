import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1',
  timeout: 30000,
});

export const signup = async data => {
  const response = await instance.post('/signup', data);
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const login = async data => {
  const response = await instance.post('/login', data);
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const chatMessage = async data => {
  const response = await instance.post('/chat', {
    messages: data,
    email: sessionStorage.getItem('email'),
  });
  if (response.status === 200) {
    return response.data;
  } else {
    return {};
  }
};

export const fetchNFTs = async () => {
  try {
    const email = sessionStorage.getItem('email');
    if (!email) return [];
    const response = await instance.get(`/nft/${email}`);

    if (response.status === 200) {
      return response.data || [];
    } else {
      return [];
    }
  } catch {
    return [];
  }
};
