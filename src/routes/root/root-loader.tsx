import { auth } from "@/libs/auth";
import { User } from "@/types/type";

export async function loader() {
  //   const user = await auth.checkUser();
  const userDummy: User = {
    id: "1",
    fullname: "admin",
    username: "amani",
    email: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    totalCart: 1,
  };

  if (!auth.isAuthenticated) {
    await auth.checkUser();
  }
  const isAuthenticated = false;

  return {
    isAuthenticated: isAuthenticated,
    user: userDummy,
  };
}
