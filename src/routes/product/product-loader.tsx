import { toast } from "@/hooks/use-toast";
import { accessToken } from "@/libs/access-token";
import { BACKEND_API_URL } from "@/libs/env";
import { AddToCartRequest } from "@/schemas/cart";
import { ApiResponse, Product } from "@/types/type";
import { LoaderFunctionArgs } from "react-router-dom";
import axios from "axios";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  try {
    const response = await fetch(`${BACKEND_API_URL}/products/${slug}`);
    const jsonResponse: ApiResponse<Product> = await response.json();
    const product: Product = jsonResponse.data;

    return product;
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
}
