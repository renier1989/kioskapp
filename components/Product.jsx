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
      <button className="bg-indigo-600 hover:bg-indigo-800 text-2xl p-3 text-white rounded mt-3 w-full uppercase transition duration-500"
      onClick={()=>{
        handleChangeModal()
        handleSetProduct(product)
    }}
      >
        I like it!
      </button>
    </div>
  );
};
