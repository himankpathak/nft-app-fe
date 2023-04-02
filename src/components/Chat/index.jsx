import React, { useState } from 'react';
import { Input } from 'antd';
import { MessageList } from 'react-chat-elements';

import 'react-chat-elements/dist/main.css';
import { chatMessage } from '../../requests';

import doc from '../../assets/doc.gif';

const { Search } = Input;

function Chat() {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'You are a mental health help assistant.',
    },
  ]);

  const [chats, setChats] = useState([
    {
      position: 'left',
      type: 'text',
      text: 'Hey, this is your personal mental health assistant. How are you doing today?',
      date: new Date(),
    },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    setChats(c =>
      c.concat({
        position: 'right',
        type: 'text',
        text: input,
        date: new Date(),
      })
    );

    const newMsg = messages.concat({ role: 'user', content: input });
    chatMessage(newMsg).then(resp => {
      setChats(c =>
        c.concat({
          position: 'left',
          type: 'text',
          text: resp[resp.length - 1].content,
          date: new Date(),
        })
      );
      setMessages(newMsg.concat(resp[resp.length - 1]));
    });

    setInput('');
  };

  return (
    <>
      <img className="doc-image" src={doc} alt="loading..." />
      <div className="container f-width">
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={chats}
        />

        <Search
          placeholder="type here"
          allowClear
          enterButton="Send"
          size="large"
          value={input}
          onChange={e => setInput(e.target.value)}
          onSearch={sendMessage}
        />
      </div>
    </>
  );
}

export default Chat;
