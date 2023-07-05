import { Outlet } from "react-router-dom";
import ProfileNav from "./ProfileNav";

const Profile = () => {
    return (
        <div>
            <ProfileNav></ProfileNav>
           <Outlet></Outlet>
        </div>
    );
};

export default Profile;