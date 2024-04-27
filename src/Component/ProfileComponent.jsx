import React, { useState } from 'react';
import ProfileService from '../Services/ProfileService';
import Cookies from 'js-cookie';

export const ProfileComponent = () => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState(null);
    const cookieString=document.cookie;
    const cookies = cookieString.split(';');
    for(const cookie of cookies){
      
    }
    
    
    ProfileService.getProfile().then((response) => {
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here

        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    {/* Add your editable form fields here */}
                    <input type="text" placeholder="Name" value={profile.name} />
                    <input type="email" placeholder="Email" value={profile.email} />

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    {/* Add your non-editable content here */}
                    <p>Name: John Doe</p>
                    <p>Email: johndoe@example.com</p>
                </div>
            )}
            <button onClick={handleEditClick}>Edit</button>
        </div>
    );
};