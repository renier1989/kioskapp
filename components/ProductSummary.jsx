import { moneyFormat } from "@/helpers"
import Image from "next/image"

export const ProductSummary = ({product}) => {
  return (
    <div className="shadow p-5 mb-3  flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image
            width={300}
            height={400}
                alt={`Product image ${product.name}`}
                src={`/assets/img/${product.image}.jpg`}
            />
        </div>
        <div className="md:w-5/6">
            <div className="text-3xl font-bold ">{product.name}</div>
            <div className="text-xl font-bold mt-2 ">Quantity:{product.quantity}</div>
            <div className="text-xl font-bold text-amber-500 mt-2">Price: {moneyFormat(product.price)}</div>
            <div className="text-sm text-gray-700 font-bold mt-2">SubTotal: {moneyFormat(product.price * product.quantity)}</div>
        </div>
    </div>
  )
}
