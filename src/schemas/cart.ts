import { z } from "zod";

export const AddToCartSchema = z.object({
   productId: z.number(),
   quantity: z.number(),
});

export type AddToCartRequest = z.infer<typeof AddToCartSchema>
