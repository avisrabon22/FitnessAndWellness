import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="bg-gray-800">
            <nav className="flex justify-between items-center py-4 px-6 w-full">
                <div>
                   <h1 className='text-gray-300 hover:text-white'>Welcome to Dashboard</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/dashboard"
                                className="text-gray-300 hover:text-white"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="text-gray-300 hover:text-white"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/diet-plan"
                                className="text-gray-300 hover:text-white"
                            >
                                Diet Plan
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
