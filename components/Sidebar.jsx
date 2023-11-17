import Image from "next/image";
import useKiosk from "../hooks/useKiosk";
import { Category } from "./Category";

export const Sidebar = () => {
  const { categories } = useKiosk();
  console.log(categories);
  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="logo" />
      <div>
        {categories.map((cat) => (
          <Category key={cat.id} category={cat}/>
        ))}
      </div>
    </>
  );
};
