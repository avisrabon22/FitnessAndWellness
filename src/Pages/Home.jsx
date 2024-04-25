import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        // You can use the email and password state variables to send the login request
        // For simplicity, let's assume the login is successful
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className='font-bold text-3xl text-sky-400'>Welcome to Fitness hub</h1>

            <form className="mt-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-lg">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
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
