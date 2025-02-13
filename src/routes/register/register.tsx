import { auth } from "@/libs/auth";
import { redirect, useNavigate } from "react-router-dom";
import { RegisterForm } from "@/pages/register/register-form";

export async function loader() {
  const user = await auth.checkUser();
  if (user) return redirect("/");
  return null;
}

const RegisterRoute = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const userRegister = {
      email: email as string,
      password: password as string,
      name: name as string,
    };
    const response = await auth.register(userRegister);

    if (!response) {
      return;
    }

    navigate("/login");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100">
      <div className="w-full max-w-sm">
        <RegisterForm onSubmit={handleRegisterSubmit} />
      </div>
    </div>
  );
};

export default RegisterRoute;
