import { Basket } from "@/types";
import { FC } from "react";
import CheckoutBtn from "./checkout-btn";
import Link from "next/link";

interface Props {
  cart: Basket;
}

const CartSummary: FC<Props> = ({ cart }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky top-4">
      <h2 className="font-semibold">Sipariş Özeti</h2>

      <div className="space-y-3 mt-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Ürünler Toplamı</span>
          <span className="font-semibold text-lg text-green-600">
            {cart.totalAmount} TL
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Kargo</span>
          <span className="font-semibold">Bedava</span>
        </div>
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between text-gray-600">
            <span>Toplam</span>
            <span className="font-semibold text-lg text-green-600">
              {cart.totalAmount} TL
            </span>
          </div>
        </div>
      </div>

      <CheckoutBtn />

      <Link
        href="/"
        className="block text-center mt-4 text-green-600 hover:underline"
      >
        Alışverişe Devam Et
      </Link>
    </div>
  );
};

export default CartSummary;
