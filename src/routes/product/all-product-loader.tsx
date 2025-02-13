import { toast } from "@/hooks/use-toast";
import { accessToken } from "@/libs/access-token";
import { BACKEND_API_URL } from "@/libs/env";
import { AddToCartRequest } from "@/schemas/cart";
import { ApiResponse, Product } from "@/types/type";
import axios from "axios";

export async function loader() {
  try {
    const response = await fetch(`${BACKEND_API_URL}/products`);
    const jsonResponse: ApiResponse<Product[]> = await response.json();
    const products: Product[] = jsonResponse.data;

    return products;
  } catch (error) {
    toast({
      variant: "destructive",
      title: `${error}`,
    });
    return null;
  }
}

export async function addProductToCart(request: AddToCartRequest) {
  const token = accessToken.get();

  try {
    const response = await axios.post(`${BACKEND_API_URL}/cart`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 201) {
      toast({
        variant: "destructive",
        title: `${response.data.message}`,
      });
      return null;
    }

    const data = response.data;
    toast({
      title: `Success added to your cart!`,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      if (error.response?.status === 401) {
        toast({
          variant: "destructive",
          title: "Unauthorized: Invalid or expired token",
        });
        accessToken.remove();
        // Optionally, redirect to login page or prompt user to log in again
      } else {
        toast({
          variant: "destructive",
          title: `${error.response?.data?.message || error.message}`,
        });
      }
    } else {
      console.error("Unexpected error:", error);
      toast({
        variant: "destructive",
        title: `Unexpected error: ${error}`,
      });
    }
    return null;
  }
}
