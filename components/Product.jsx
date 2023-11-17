import { moneyFormat } from "@/helpers";
import Image from "next/image";

export const Product = ({ product }) => {
  const { name, image, id, price } = product;
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
    </div>
  );
};
