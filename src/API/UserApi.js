import axios from "axios";
const USER_API_URL = "http://localhost:80808/api/v1/users";

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
    
}

export default UserApi;