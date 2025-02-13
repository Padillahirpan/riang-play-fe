import { toast } from "@/hooks/use-toast";
import { accessToken } from "@/libs/access-token";
import { BACKEND_API_URL } from "@/libs/env";
import { ApiResponse, CartResponse } from "@/types/type";

export async function loader() {
  try {
    const token = accessToken.get();

    const response = await fetch(`${BACKEND_API_URL}/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const jsonResponse: ApiResponse<CartResponse> = await response.json();
    const cartResponse: CartResponse = jsonResponse.data;

    return cartResponse;
  } catch (error) {
    toast({
      variant: "destructive",
      title: `${error}`,
    });
    return null;
  }
}
