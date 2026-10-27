import { ProductsRes ,ProductRes } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getAllProducts = async ():ProductsRes => {
  const response = await fetch(`${BASE_URL}/api/groceries`);

  return response.json();
};


// bir ürünü al
const getProduct = async (id: string): ProductRes => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);
  return res.json();
};

export { getAllProducts, getProduct };
