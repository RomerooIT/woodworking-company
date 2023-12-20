import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setFirstName] = useState('');
  const [surname, setLastName] = useState('');

  const handleClick = async () => {
    try {
      let response;

      if (isLogin) {
        response = await axios.post('http://localhost:7891/api/auth/sign-in', {
          email,
          password,
        });
      } else {
        response = await axios.post('http://localhost:7891/api/auth/sign-up', {
          email,
          password,
          name,
          surname,
        });
      }

      // Проверяем, что статус ответа 201 и в теле ответа есть refreshToken
      if (response.status === 201 && response.data?.refreshToken) 
      {
        // Сохраняем refreshToken в localStorage под именем REFRESH_TOKEN
        localStorage.setItem('REFRESH_TOKEN', response.data.refreshToken);

        alert(isLogin ? 'Авторизация прошла успешно.' : 'Регистрация прошла успешно.');

        // Устанавливаем контекст пользователя, если это необходимо
        user.setUser(response.data);

        // Редирект на страницу ./Account
        history.push('./Account');
        window.location.reload();
      } else {
        alert(isLogin ? 'Что-то пошло не так при авторизации.' : 'Что-то пошло не так при регистрации.');
      }
    } catch (error) {
      // Обрабатываем ошибки, выводим сообщение об ошибке
      alert(error.response ? error.response.data.message : 'Что-то пошло не так.');
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

          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Имя"
              value={name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          )}

          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Фамилия"
              value={surname}
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
