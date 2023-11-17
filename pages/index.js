import useKiosk from "@/hooks/useKiosk";
import { Layout } from "../layout/Layout";

export default function Home() {
  const {currentCategory} = useKiosk()
  return (
    <Layout>
      <h1 className="text-4xl font-bold">{currentCategory?.name} </h1>
      <p className="text-2xl my-8">
        Choose and customize your order below.
      </p>
    </Layout>
  );
}
