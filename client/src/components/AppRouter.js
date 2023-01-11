import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/constants';
import { Context } from '../';

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(">>>user.isAut!h",user.isAuth, authRoutes)
    return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} exact/>
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} exact/>
      )}
      <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
    );
};

export default AppRouter;