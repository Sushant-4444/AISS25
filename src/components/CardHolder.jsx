import React from "react";
import ProfileCard from "./Gallery.jsx"; // make sure the path is correct

const CardHolder = ({ profiles }) => {
return (
    <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    name={profile.name}
                    role={profile.role}
                    image={profile.image}
                    email={profile.email}
                    github={profile.github}
                    linkedin={profile.linkedin}
                />
            ))}
        </div>
    </div>
);
};

export default CardHolder;
