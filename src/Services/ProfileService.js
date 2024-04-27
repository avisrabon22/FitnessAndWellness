import ProfileApi from "../API/ProfileApi";

const ProfileService = {
    getProfile: async (emailId) => {
        return ProfileApi.getProfile(emailId);
    },
    updateProfile: async (emailId, profile) => {
        return ProfileApi.updateProfile(emailId, profile);
    },
};
export default ProfileService;
