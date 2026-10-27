import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import ClearBtn from "@/components/cart/clear-btn";
import { getBasket } from "@/service/basket-service";

const Page = async () => {
  const { cart } = await getBasket();

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Alışveriş Sepeti
      </h1>

      <div className="lg:flex gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">
                Sepetiniz ({cart.items.length})
              </h2>

              <ClearBtn />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3">
          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Page;
