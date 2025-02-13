import { auth } from "@/libs/auth";
import { LoginForm } from "./login-form";
import { redirect, useNavigate } from "react-router-dom";

export async function loader() {
  const user = await auth.checkUser();
  if (user) return redirect("/");
  return null;
}

const LoginRoute = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const userLogin = { email: email as string, password: password as string };
    const response = await auth.login(userLogin);

    if (!response) {
      return;
    }

    navigate("/");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
};

export default LoginRoute;
