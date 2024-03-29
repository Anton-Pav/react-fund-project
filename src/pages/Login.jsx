import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const submit = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Требуется логинизация</h1>
            <form onSubmit={submit}>
                <MyInput type={'text'} placeholder={'Введите логин'}/>
                <MyInput type={'password'} placeholder={'Введите пароль'}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;