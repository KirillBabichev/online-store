import React, { useMemo } from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';

const Auth = () => {
    const location = useLocation();
    const isLogin = useMemo(()=> location.pathname === LOGIN_ROUTE, [location])

    return (
        <Container className='d-flex justify-content-center' style={{ height: window.innerHeight - 54}}>
            <Card style={{width: 600, height: 300}} className="p-5 mt-5">
                <h2 className='m-auto'>{isLogin ? "Login" : "Registration"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your email'
                    />
                        <Form.Control
                        className='mt-2'
                        placeholder='Enter your password'
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

                    <Button variant='outline-success' 
                        className='mt-2 align-self-end'>
                        {isLogin ? "Login" : "Registration"}
                    </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;