import UserApi from "../API/UserApi"

const UserService =  { 
    // User register service
    registerUser: async (data) => {
        try {
            const response = await UserApi.registerUser(data);
            return response;
        } catch (error) {
            return error;
        }
    },
    // User login service
    loginUser: async (data) => {
        try {
            const response = await UserApi.loginUser(data);
            return response;
        } catch (error) {
            return error;
        }
    },


}

export default UserService;
