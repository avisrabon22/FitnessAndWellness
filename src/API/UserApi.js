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
    loginUser: async (data) => {
        try {
            const response = await axios.post(`${USER_API_URL}/login`, data);
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    },
    
}

export default UserApi;