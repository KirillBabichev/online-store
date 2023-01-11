import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite'

import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Online Shop</NavLink>
          {user.isAuth ? 
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant='outline-light'
              onClick={()=> navigate(ADMIN_ROUTE)}>Admin Panel</Button>
            <Button variant='outline-light' 
              onClick={()=> logOut()} 
              className='ms-2'>
              logOut
            </Button>
          </Nav> : 
          <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant='outline-light' onClick={()=> navigate(LOGIN_ROUTE)}>Sign In</Button>
        </Nav>
        }
        </Container>
      </Navbar>
    );
});
  {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
export default NavBar;
