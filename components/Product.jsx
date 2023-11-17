import { moneyFormat } from "@/helpers";
import useKiosk from "@/hooks/useKiosk";
import Image from "next/image";

export const Product = ({ product }) => {
  const { name, image, id, price } = product;
  const {handleChangeModal,handleSetProduct} = useKiosk()
  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt="Product image"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 text-4xl font-bold text-amber-500">{moneyFormat(price)}</p>
      </div>

      <button className="flex  text-center justify-center gap-4 bg-indigo-600 hover:bg-indigo-800 text-2xl p-3 text-white rounded mt-3 w-full uppercase transition duration-500"
      onClick={()=>{
        handleChangeModal()
        handleSetProduct(product)
    }}
      >
        I like it!

        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
      </button>
      
    </div>
  );
};
