import { useLoaderData, useNavigate } from "react-router-dom";
import { loader } from "./profile-loader";
import { ProfilePage } from "@/pages/profile/profile";
import { auth } from "@/libs/auth";

const ProfileRoute = () => {
  const navigate = useNavigate();

  const profile = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const onLogout = async () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100">
      <div className="w-full max-w-sm">
        <ProfilePage
          profile={profile}
          onLogout={() => {
            onLogout();
          }}
        />
      </div>
    </div>
  );
};

export default ProfileRoute;
