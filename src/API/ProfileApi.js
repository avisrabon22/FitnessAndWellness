const API_PROFILE = `http://localhost:8080/api/v1/user`;



const ProfileApi = {
    getProfile: async (emailId) => {
        return await axios.get(`${API_PROFILE}/profile/${emailId}`);
    },
    updateProfile: async (emailId, profile) => {
        return await axios.put(`${API_PROFILE}/profile/${emailId}`, profile);
    },
};

export default ProfileApi;