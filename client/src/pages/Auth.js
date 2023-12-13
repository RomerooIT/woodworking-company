import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { click } from '@testing-library/user-event/dist/click';

// Функция для выполнения запроса на авторизацию
const login = async (email, password) => {
  // Ваш код для выполнения запроса на авторизацию пользователя
};

// Функция для выполнения запроса на регистрацию
const registration = async (email, password, firstName, lastName) => {
  // Ваш код для выполнения запроса на регистрацию пользователя
};

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClick = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password, firstName, lastName);
      }
      user.setUser(user);
      user.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Добавленное поле имени */}
          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          )}

          {/* Добавленное поле фамилии */}
          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          )}

          <Form.Control
            className="mt-3"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Ещё не создали аккаунт?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйтесь!</NavLink>
              </div>
            )}
            <Button className="mt-3 align-self-end" variant={'outline-success'} onClick={handleClick}>
              {isLogin ? 'Авторизация' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
