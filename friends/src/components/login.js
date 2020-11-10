import React, { useState } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialValues = {
    username: '',
    password: ''
}


const Login = () => {
    const [info, setinfo] = useState(initialValues)
    const history = useHistory()

    const handleChange = e => {
        setinfo({ ...info, [e.target.name]: e.target.value })
    }
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', info)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/protected')
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={info.username}
                    onChange={handleChange}
                >
                </input>
                <input
                    type='password'
                    name='password'
                    value={info.password}
                    onChange={handleChange}
                >
                </input>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Login