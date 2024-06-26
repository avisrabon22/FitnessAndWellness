import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService';
import { notify } from '../Util/Notification';

export const Home = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    // Handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((data) => ({
            ...data,
            [name]: value,
        }))
    };

    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            notify('All fields are required,you missed something', 'warning');
            setLoginData({
                email: '',
                password: '',
            });
            return;
        }
        try {
            const response = await UserService.loginUser(loginData);
            if (response.status === 200) {
                notify("You are logged in", 'success');
                return navigate('/dashboard');
            } else {
                notify('Invalid credentials', 'error');
                return;
            }
        }
        catch (error) {
            notify('Invalid credentials', 'error');
           return; 
        }
    };





    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className='font-bold text-3xl text-sky-400'>Welcome to Fitness Club</h1>

            <form onSubmit={handleLogin} className="mt-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        name='email'
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name='password'
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Login
                </button>
            </form>

            <p className="mt-4">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </p>
        </div>
    );
};
