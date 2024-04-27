import NavBar from "../Component/NavBar"
import { ProfileComponent } from "../Component/ProfileComponent"
export const Profile = () => {
    return (
        <>
            <NavBar />
            <div>
                <h1 className="font-bold">Profile</h1>
            </div>
            <ProfileComponent />
        </>
    )
}