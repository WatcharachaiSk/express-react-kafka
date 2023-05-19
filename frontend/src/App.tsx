import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
// import WebSocket from 'ws';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageNew, setMessageNew] = useState('');

  console.log('messages is ', messages);
  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('message', (data: string) => {
      console.log('Received message:', data);
      console.log('data is ', data);

      setMessages((prevMessages: any) => [...prevMessages, data]);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const socket = io('http://localhost:3000'); // Replace with your Socket.IO server URL
    socket.emit('message', messageNew);
    setMessageNew(''); // Clear the input field after sending the message
  };

  return (
    <div className='App'>
      <div>
        {/* Render your component content */}
        {/* <div>
          <input
            type='text'
            value={messageNew}
            onChange={(e) => setMessageNew(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div> */}
        <div>
          <h1>Real-time Messages</h1>
          <ul>
            {messages.map((item: any, index) => (
              <li style={{fontSize:20}} key={index}>
                Key is : {item.key} lat:Is: {item.lat} lat:Is {item.long}{' '}
                value:Is {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
