import { moneyFormat } from "@/helpers";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Order({ orders }) {
  const { id, name, total, order, date, state } = orders;
  const completeOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
        toast.success('Order ready!')
    } catch (error) {
        toast.error('Something when wrong')
        console.log(error);
    }
  };
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order # {id}</h3>
      <p className="text-lg font-bold">Order name: {name}.</p>

      <div className=" ">
        {order?.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b last-of-type:border-none py-3"
          >
            <Image
              width={400}
              height={500}
              alt={`Item image ${name}`}
              src={`/assets/img/${item.image}.jpg`}
              className="rounded-md w-32"
            />
            <div className="p-5 space-y-2">
              <p className="font-bold text-amber-500 text-2xl">{item.name}</p>
              <p className="font-bold text-lg">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-bold text-amber-500 text-4xl">
          Total to Pay : {moneyFormat(total)}
        </p>

        {!state ? (<button
          className="py-4 px-10 bg-indigo-600 hover:bg-indigo-800 uppercase text-white rounded font-bold mt-5 md:mt-0"
          type="button"
          onClick={completeOrder}
        >
          Complete Order
        </button>) : (
            <button className="py-4 px-10 bg-green-600 hover:bg-green-800 uppercase text-white rounded font-bold mt-5 md:mt-0">
                completed
            </button>
        )}
        
      </div>
    </div>
  );
}
