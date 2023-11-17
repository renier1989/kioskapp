import Image from "next/image";
import useKiosk from "../hooks/useKiosk";
import { Category } from "./Category";

export const Sidebar = () => {
  const { categories } = useKiosk();
  return (
    <>
      <Image className="flex text-center mx-auto justify-center" width={300} height={100} src="/assets/img/logo.svg" alt="logo" />
      <div className="mt-3">
        {categories.map((cat) => (
          <Category key={cat.id} category={cat}/>
        ))}
      </div>
    </>
  );
};
