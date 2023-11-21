/* eslint-disable react-hooks/rules-of-hooks */
import AdminLayout from "@/layout/AdminLayout";
import axios from "axios";
import useSWR from "swr";

export default function admin() {

  const fetcher = ()=> axios('/api/orders').then(order => order.data)
  const {data , error, isLoading} = useSWR('/api/orders', fetcher)

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <AdminLayout page={'Check Orders'}>
        <div>
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <p className="text-2xl my-8">Check the queue orders.</p>

        {/* {isLoading && <p> Cargando...</p>} */}
        </div>
    </AdminLayout>
  )
}
