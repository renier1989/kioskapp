/* eslint-disable react-hooks/rules-of-hooks */
import { ProductSummary } from "@/components/ProductSummary";
import useKiosk from "@/hooks/useKiosk";
import { Layout } from "@/layout/Layout";

export default function summary() {
  const { order } = useKiosk();
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold">Summary</h1>
        <p className="text-2xl my-8">Check you order.</p>
      </div>

      <div>{
        order.length === 0 ? (
          <p>Theres no products in your order</p>
        )
        :
        (
          order?.map(product => (
            <ProductSummary key={product.id} product={product} />
          ))
        )
        }</div>
    </Layout>
  );
}
