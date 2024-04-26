import { useState } from "react"
import UserService from "../Services/UserService";
import { notify } from "../Util/Notification";

export const Register = () => {
   
    const [userData,setUserData] = useState({
        name:``,
        email:``,
        password:``,
        age:``,
        height:``,
        weight:``,
        gender:``,
    })

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(userData);
        if (!userData.email || !userData.name ||!userData.password||!userData.age || !userData.height || !userData.weight || !userData.gender) {
            notify('All fields are required','warning')
            setUserData({
                name:``,
                email:``,
                password:``,
                age:``,
                height:``,
                weight:``,
                gender:``,
                 })
            return;
        }
        
        UserService.registerUser(userData).then(res=>{
            if(res.status === 201){
                notify(res.data,'success')
            }
            else{
                notify('User registration failed','error')
            }
            console.log(res);
           
        }).catch(err=>{
            notify('Something went wrong','error')
            console.log(err);
        })
        
       setUserData({
        name:``,
        email:``,
        password:``,
        age:``,
        height:``,
        weight:``,
        gender:``,
         })

    };


    return <div className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-3xl text-sky-400'>Welcome to Fitness hub</h1>

        <form onSubmit={handleRegister} className="mt-4 flex flex-col items-center">
        <h2 className='font-bold text-3xl '>Register</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-lg">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="age" className="block mb-2 text-lg">
                    Age
                </label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.age}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="height" className="block mb-2 text-lg">
                   Height
                </label>
                <input
                    type="number"
                    name="height"
                    id="height"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.height}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="height" className="block mb-2 text-lg">
                    Weight
                </label>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.weight}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="gender" className="block mb-2 text-lg">
                Gender
                </label>
                <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={userData.gender}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Register
            </button>
        </form>
    </div>
};


