// import img from "../../assets/images/";

import { RegisterForm } from "./register-form";

const RegisterRoute = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterRoute;
