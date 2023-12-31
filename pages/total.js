/* eslint-disable react-hooks/rules-of-hooks */
import { moneyFormat } from "@/helpers";
import useKiosk from "@/hooks/useKiosk";
import { Layout } from "@/layout/Layout";
import axios from "axios";
import { useCallback, useEffect } from "react";
import useSWR from "swr";

export default function total() {
  const { order, orderName, setOrderName, placeOrder, total } = useKiosk();

  const fetcher = () => axios("/api/orders").then((order) => order.data);
  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    refreshInterval: 100,
  });

  const checkOrder = useCallback(() => {
    return order.length === 0 || orderName === "" || orderName.length < 3;
  }, [order, orderName]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <Layout page={"Total"}>
      <div>
        <h1 className="text-4xl font-bold">Data & Total</h1>
        <p className="text-2xl my-8">Set your info & place the order.</p>

        <form onSubmit={placeOrder}>
          <div>
            <label
              htmlFor="client-name"
              className="block uppercase font-bold text-xl text-slate-700"
            >
              Client Name
            </label>
            <input
              id="client-name"
              type="text"
              className=" bg-gray-200 mt-3 w-full p-2 rounded-md lg:w-1/3"
              value={orderName}
              onChange={(e) => setOrderName(e.target.value)}
            />
          </div>

          <div className="mt-10 ">
            <p className="text-2xl">
              Total {""} <span className="font-bold">{moneyFormat(total)}</span>{" "}
            </p>
          </div>

          {data?.length >= 5 ? (
            <button className=" mt-5 text-center  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-blue-800">
              Sorry there are to many order, please Wait a bit.
            </button>
          ) : (
            <div className="mt-5">
              <input
                type="submit"
                value="Confirm Order"
                className={`${
                  checkOrder()
                    ? "bg-indigo-300 cursor-not-allowed "
                    : "hover:bg-indigo-800 cursor-pointer"
                } text-center  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 `}
                disabled={checkOrder()}
              />
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}
