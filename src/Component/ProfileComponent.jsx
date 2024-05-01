import React, { useEffect, useState } from 'react';
import UserService from '../Services/UserService';
import { notify } from '../Util/Notification';
import { useNavigate } from 'react-router-dom';


export const ProfileComponent = () => {
  const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({});

    // Fetch profile data
    const fetchProfile = async () => {
        UserService.profile().then((response) => {
            if (response.status !== 200) {
                notify("Something went wrong,please login again", 'error');
                return navigate('/');
            }
            setProfile(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    // Fetch profile data on component mount
    useEffect(() => {
        fetchProfile();
    }, []);


    const handleEditClick = () => {
        fetchProfile();
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // update your form submission logic here
        UserService.updateProfile(profile).then((response) => {
            notify(profile.data, 'success');
        }).catch((error) => {
            notify('Something went wrong', 'error');
        });
        
        // after form submission, set isEditing to false    
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    }
    return (
        <div>
            {isEditing ? (
                <div className="flex flex-col items-center justify-center">
                    <h1 className='font-bold text-3xl text-sky-400'>Welcome to Fitness Club</h1>

                    <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
                        <h2 className='font-bold text-3xl m-2 '>Register</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name='email'
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                id="password"
                                name='password'
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                name="age"
                                id="age"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.age}
                                onChange={handleChange}
                                placeholder="Enter your age"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                name="height"
                                id="height"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.height}
                                onChange={handleChange}
                                placeholder="Enter your height"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                name="weight"
                                id="weight"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.weight}
                                onChange={handleChange}
                                placeholder="Enter your weight"
                            />
                        </div>

                        <div className="mb-4">
                            <select
                                type="text"
                                name="gender"
                                id="gender"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={profile.gender}
                                onChange={handleChange}

                            >
                                <option value="">Gender</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                                <option value="O">O</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600">
                            Save
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Add your non-editable content here */}
                    <p className="text-lg">Name: {profile.name}</p>
                    <p className="text-lg">Email: {profile.email}</p>
                    <p className="text-lg">Age: {profile.age}</p>
                    <p className="text-lg">Height: {profile.height}</p>
                    <p className="text-lg">Weight: {profile.weight}</p>
                    <p className="text-lg">Gender: {profile.gender}</p>
                    <button
                        onClick={handleEditClick}
                        className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};