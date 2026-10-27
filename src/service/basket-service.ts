import { BasketRes, OrdersRes, Product, UrlRes } from "@/types";

// api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepete ürün ekle
const addToBasket = async (groceryId: string, quantity: number) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
  });

  return res.json();
};


// sepetteki ürünleri al
const getBasket = async (): BasketRes => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};

// 1 ürün için satın alma isteği
const checkoutSinleItem = async (
  grocery: Product,
  quantity: number
): UrlRes => {
  const body = {
    grocery: grocery._id,
    quantity: quantity,
    customerInfo: {
      userId,
      name: "Gizem",
      phone: "555 666 77 88",
      deliveryAddress: "İstanbul, Türkiye 123sk. no:45 d:7",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// ürünün miktarını güncelle
const updateQuantity = async (groceryId: string, newQuantity: number) => {
  const res = await fetch(`${BASE_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity: newQuantity }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// ürünü sepetten kaldır
const removeFromBasket = async (groceryId: string) => {
  const res = await fetch(
    `${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`,
    { method: "DELETE" }
  );

  return res.json();
};

// sepeti temizle
const clearBasket = async () => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    method: "DELETE",
  });

  return res.json();
};

// sepetteki bütün ürünle için satın alım oturumunu oluşturucak
const checkoutBasket = async (): UrlRes => {
  const body = {
    userId,
    customerInfo: {
      userId,
      name: "Gizem",
      phone: "555 666 77 88",
      deliveryAddress: "İstanbul, Türkiye 123sk. no:45 d:7",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// siparişleri al
const getOrders = async (): OrdersRes => {
  const res = await fetch(`${BASE_URL}/api/orders?customer_id=${userId}`);
  return res.json();
};

export {
  addToBasket,
  getBasket,
  checkoutSinleItem,
  updateQuantity,
  removeFromBasket,
  clearBasket,
  checkoutBasket,
  getOrders,
};
