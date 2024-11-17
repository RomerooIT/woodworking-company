import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  const { user, logout } = useContext(Context);
  const hasRefreshToken = localStorage.getItem('REFRESH_TOKEN');
  const [userRole, setUserRole] = useState(user ? user.role : null);

  useEffect(() => {
    // If there's no user role but there's a refresh token, try extracting it from the token
    if (!userRole && hasRefreshToken) {
      try {
        const token = JSON.parse(atob(localStorage.getItem('REFRESH_TOKEN').split('.')[1]));
        setUserRole(token.role);
        console.log('User Role from Token:', token.role);
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, [userRole, hasRefreshToken]);

  const handleLogout = () => {
    localStorage.removeItem('REFRESH_TOKEN');
    localStorage.removeItem('SESSION_ID');
    window.location.reload();
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Account">Главная</Navbar.Brand>
        
        <Nav className="me-auto">
          {!hasRefreshToken && <Nav.Link href="/TovariNoname">Товары</Nav.Link>}
          
          {userRole === 'ADMIN' && 
          (
            <>
              <Nav.Link href="/Group">Сотрудники</Nav.Link>
              <Nav.Link href="/Requests">АдминЗаявки</Nav.Link>
              <Nav.Link href="/Timetable">Товары</Nav.Link>
     {/*       <Nav.Link href="/AdminSupport">ТехподдержкаАдмин</Nav.Link> */}
            </>
          )}

          {userRole === 'USER' && (
            <>
              <Nav.Link href="/Workmaterials">МоиЗаявки</Nav.Link>
              <Nav.Link href="/TovariUsers">Товары</Nav.Link>
  {/*         <Nav.Link href="/SupportUser">Техподдержка</Nav.Link> */}
            </>
          )}
        </Nav>

        <Nav className="m-lg-0auto">
          <Button size="sm" variant={'outline-light'}>
            <Nav.Link style={{ color: 'white' }} href={'/login'}>
              ВЫБРАТЬ ПОЛЬЗОВАТЕЛЯ
            </Nav.Link>
          </Button>
          
          {hasRefreshToken && (
            <Button
              size="sm"
              variant={'outline-light'}
              style={{
                marginLeft: '10px',
                border: '1px solid red',
                color: 'red',
              }}
              onClick={handleLogout}
            >
              ВЫЙТИ
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
