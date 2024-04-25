import { useState } from "react";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState
    ('');
    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
 

    const handleRegister = async () => {
        if (!email || !password || !name || !phone || !address) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Make API request to register the user
            // For simplicity, let's assume the registration is successful
            setSuccess('Registration successful');
            setLoading(false);
            history.push('/dashboard');
        } catch (error) {
            setError('Something went wrong. Please try again later');
            setLoading(false);
        }
    };

    return <div className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-3xl text-sky-400'>Welcome to Fitness hub</h1>

        <form className="mt-4 flex flex-col items-center">
        <h2 className='font-bold text-3xl '>Register</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-lg">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

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
                <label htmlFor="phone" className="block mb-2 text-lg">
                    Phone
                </label>
                <input
                    type="text"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block mb-2 text-lg">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-2 text-lg">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {success && <p className="text-green-500">{success}</p>}
            <button
                type="button"
                className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleRegister}
            >
                {loading ? 'Loading...' : 'Register'}

            </button>
        </form>
    </div>
};


