"use client";

import { checkoutBasket } from "@/service/basket-service";
import { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";

const CheckoutBtn = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // sepetteki ürünlerin satın alım oturumunu oluşturur ve url döner
      const data = await checkoutBasket();

      // kullanıcıyı oluşturulan linke yönlendir
      window.location.href = data.url;
    } catch (err) {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleCheckout}
      className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transition disabled:brightness-75 disabled:cursor-not-allowed"
    >
      <MdOutlineShoppingCartCheckout />
      Ödeme Yap
    </button>
  );
};

export default CheckoutBtn;
