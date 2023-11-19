/* eslint-disable react-hooks/rules-of-hooks */
import useKiosk from "@/hooks/useKiosk";
import { Layout } from "@/layout/Layout";
import { useCallback, useEffect } from "react";

export default function total() {
  const {order} = useKiosk()

   const checkOrder = useCallback(()=>{
    return order.length === 0;
  },[order]);

  useEffect(()=>{
    checkOrder()
  },[order,checkOrder])

  const placeOrder = e => {
    e.preventDefault()
    console.log('hola');
  }
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold">Data & Total</h1>
        <p className="text-2xl my-8">Set your info & place the order.</p>

        <form
        onSubmit={placeOrder}
        >
          <div >
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
            />
          </div>

          <div className="mt-10 ">
            <p className="text-2xl" >Total {""} <span className="font-bold">$200</span>  </p>
          </div>

          <div className="mt-5">
            <input type="submit" value="Confirm Order" className={`${checkOrder() ? 'bg-indigo-200 cursor-not-allowed':' hover:bg-indigo-800'} text-center cursor-pointer w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 `}
              disabled={checkOrder()}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
