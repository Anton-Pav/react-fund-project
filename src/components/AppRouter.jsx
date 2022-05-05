import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {Navigate} from "react-router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(r =>
                    <Route
                        key={r.path}
                        element={r.component}
                        path={r.path}
                    />)}
                <Route path='*' element={<Navigate replace to='/posts' />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(r =>
                    <Route
                        key={r.path}
                        element={r.component}
                        path={r.path}
                    />)}
                <Route path='*' element={<Navigate replace to='/login' />} />
            </Routes>
    );
};

export default AppRouter;