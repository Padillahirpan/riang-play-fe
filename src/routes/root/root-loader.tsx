import { auth } from "@/libs/auth";

export async function loader() {
  const user = await auth.checkUser();

  if (!auth.isAuthenticated) {
    await auth.checkUser();
  }

  return {
    isAuthenticated: auth.isAuthenticated,
    user: user,
  };
}
