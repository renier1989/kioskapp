import { Layout } from "@/layout/Layout";

export default function total() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold">Data & Total</h1>
        <p className="text-2xl my-8">Set your info & place the order.</p>

        <form>
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
            <input value="Confirm Order" className="text-center cursor-pointer w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
