import axios from "axios";
const USER_API_URL = "http://localhost:8080/api/v1/user";

const UserApi =  {

    //  User register
    registerUser: async (data) => {
        try {
            const response = await axios.post(`${USER_API_URL}/register`, data);
            return response;
        } catch (error) {
            return error;
        }
    },
    // User login
    loginUser: async(data) => {
        try {
            console.log(data);
            const response = await axios.post(`${USER_API_URL}/login`, data, {withCredentials: true});
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    },
    // Get profile
    profile:async()=>{
        try {
            const response = await axios.get(`${USER_API_URL}/profile`, {withCredentials: true});
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    },
    // Update profile
    updateProfile:async(data)=>{
        try {
            const response = await axios.put(`${USER_API_URL}/profile`, data, {withCredentials: true});
            return response;
        } catch (error) {
            return error;
        }
    },
}

export default UserApi;