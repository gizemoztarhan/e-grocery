import { getOrders } from "@/service/basket-service";
import Image from "next/image";
import { FC } from "react";
import { FaCalendarAlt, FaPhone } from "react-icons/fa";

const Page: FC = async () => {
  const { orders } = await getOrders();

  if (!orders || orders.length === 0) return <div>Sipariş bulunamadı</div>;

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="rounded-lg bg-white border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="p-6">
              {/* Ürün Bilgileri */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="size-20 relative rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={order.product.photo}
                      alt={order.product.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {order.product.name}
                    </h3>

                    <p className="text-gray-600">
                      {order.quantity} {order.product.unit} x{" "}
                      {order.product.price} TL
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <h5 className="text-2xl font-bold text-green-600">
                    {order.money_spend}
                  </h5>
                  <p className="text-sm text-gray-500">{order.currency}</p>
                </div>
              </div>

              {/* Sipariş Tarihi */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-green-600" />

                  <div>
                    <h5 className="text-sm text-gray-500">Sipariş Tarihi</h5>
                    <p>{new Date(order.createdAt).toLocaleDateString("tr")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-green-600" />

                  <div>
                    <h5 className="text-sm text-gray-500">Müşteri</h5>
                    <p>{order.customer_name}</p>
                    <p className="text-sm text-gray-700">
                      {order.customer_phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
