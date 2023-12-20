import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SupportChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const getUserIdFromToken = () => {
    try {
      const token = localStorage.getItem('REFRESH_TOKEN');
      if (token) {
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        const userId = tokenData.id;
        console.log('ID пользователя из токена:', userId);
        return userId;
      }
    } catch (error) {
      console.error('Ошибка при декодировании токена', error);
    }
    return null;
  };

  const fetchUserSupportDialog = async () => {
    const userId = getUserIdFromToken();

    if (userId) {
      const apiUrl = `http://127.0.0.1:7891/api/support/getUserSupportDialog?userId=${userId}`;

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMessages(data || []); // Используйте поле "message" в ответе
        } else {
          console.error('Ошибка при получении сообщений:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Произошла ошибка при получении сообщений', error);
      }
    }
  };

  useEffect(() => {
    fetchUserSupportDialog();
  }, []);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const userId = getUserIdFromToken();

    if (userId && newMessage.trim() !== '') {
      const apiUrl = `http://127.0.0.1:7891/api/support/createMessage?clientId=${userId}&message=${encodeURIComponent(newMessage)}`;

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          setNewMessage('');
          fetchUserSupportDialog();
        } else {
          console.error('Ошибка при отправке сообщения:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Произошла ошибка при отправке сообщения', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">Техподдержка</div>
        <div className="card-body d-flex flex-column" style={{ height: '300px', overflowY: 'scroll', backgroundColor: '#f0f0f0' }}>
          {messages.map((message, index) => (
            <div key={index} className={message.replyToClientId ? 'text-right mb-3' : 'text-left mb-3'}>
              <div
                className={`p-3 rounded ${
                  message.replyToClientId ? 'bg-info text-white' : 'bg-light text-dark'
                }`}
                style={{ maxWidth: '70%', wordWrap: 'break-word' }}
              >
                {message.message}
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Введите ваш вопрос..."
            />
            <div className="input-group-append">
              <button
                onClick={handleSendMessage}
                className="btn btn-success"
                type="button"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
