import React, { useMemo, useState, useContext } from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import { login, registration } from '../api/userApi';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation();
    const isLogin = useMemo(()=> location.pathname === LOGIN_ROUTE, [location])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = async () => {
        try {
            let response;
            if(isLogin) {
                response = await login(email, password);
            } else {
                response = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
     
    }

    return (
        <Container className='d-flex justify-content-center' style={{ height: window.innerHeight - 54}}>
            <Card style={{width: 600, height: 300}} className="p-5 mt-5">
                <h2 className='m-auto'>{isLogin ? "Login" : "Registration"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                        <Form.Control
                        className='mt-2'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        type='password'
                    />
                    <div className='d-flex justify-content-between align-items-center'>
                    {isLogin ?
                        <div>
                            no account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                        </div> :
                        <div>
                            Already have account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                        </div> 
                    }

                    <Button 
                        onClick={onButtonClick}
                        variant='outline-success'
                        className='mt-2 align-self-end'>
                        {isLogin ? "Login" : "Registration"}
                    </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;