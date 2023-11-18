import Image from "next/image";
import useKiosk from "../hooks/useKiosk";
import { Category } from "./Category";

export const Sidebar = () => {
  const { categories } = useKiosk();
  return (
    <>
      <Image className="flex text-center mx-auto justify-center py-10" width={200} height={50} src="/assets/img/logo.svg" alt="logo" />
      <div className="mt-3">
        {categories.map((cat) => (
          <Category key={cat.id} category={cat}/>
        ))}
      </div>
    </>
  );
};
