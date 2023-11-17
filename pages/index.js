import useKiosk from "@/hooks/useKiosk";
import { Layout } from "../layout/Layout";
import { Product } from "@/components/Product";

export default function Home() {
  const { currentCategory } = useKiosk();
  return (
    <Layout>
      <h1 className="text-4xl font-bold">{currentCategory?.name} </h1>
      <p className="text-2xl my-8">Choose and customize your order below.</p>

      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
