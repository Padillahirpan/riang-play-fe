import { auth } from "@/libs/auth";

export async function loader() {
  const response = await auth.checkUser();

  return response;
}
