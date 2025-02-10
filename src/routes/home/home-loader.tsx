import { toast } from "@/hooks/use-toast";
import { BACKEND_API_URL } from "@/libs/env";
import { ApiResponse, Product } from "@/types/type";

export async function loader() {
  const response = await fetch(`${BACKEND_API_URL}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    toast({
      variant: "destructive",
      title: `${errorResponse.message}`,
    });
    return [];
  }

  const responseData: ApiResponse<Product[]> = await response.json();

  return responseData.data;
}
