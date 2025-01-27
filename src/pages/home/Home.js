import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { MdOutlineRefresh } from "react-icons/md";
import TransactionCard from "../../components/card/TransactionCard";
import SettlementsCard from "../../components/card/SettlementsCard";
import QuickActionSlider from "../../screens/sliders/QuickActionSlider";
import OrderConfirmScreen from "../../screens/dashboard/orderConfirm/OrderConfirmScreen";
import TransitionScreen from "../../screens/dashboard/transition/TransitionScreen";

function Home() {
  return (
    <MainLayout>
      <main className="grid lg:grid-cols-2 gap-5 place-items-start">
        <div className="grid gap-5 w-full">
          <section className="bg-white p-3 rounded-lg">
            <h1 className="text-xl font-semibold mb-2">Quick Actions</h1>
            <QuickActionSlider />
          </section>
          <section className="bg-white p-3 pt-0 rounded-lg ">
            <div className="flex justify-between items-center pb-2 sticky top-0 bg-white pt-3 z-40">
              <div className="space-y-1 shrink">
                <h1 className="text-xl font-semibold">Recent Transaction</h1>
                <p className="text-black/50 text-xs">
                  Last update at: June 02, 2024 | 11:25 PM
                </p>
              </div>
              <div className="flex justify-center items-center size-11 rounded-full active:bg-gray-50 min-w-11">
                <MdOutlineRefresh className="text-2xl m-auto" />
              </div>
            </div>
            <>
              <TransitionScreen />
            </>
          </section>
        </div>
        <section className="bg-white p-3 pt-0 rounded-lg space-y-6 w-full ">
          <div className="flex justify-between items-center pb-2 sticky top-0 bg-white pt-3 z-40">
            <div className="space-y-1 shrink">
              <h1 className="text-xl font-semibold">Order</h1>
              <p className="text-black/50 text-xs">
                Last update at: June 02, 2024 | 11:25 PM
              </p>
            </div>
            <div className="flex justify-center items-center size-11 rounded-full active:bg-gray-50 min-w-11">
              <MdOutlineRefresh className="text-2xl m-auto" />
            </div>
          </div>
          <>
            <OrderConfirmScreen />
          </>
        </section>
      </main>
    </MainLayout>
  );
}

export default Home;
