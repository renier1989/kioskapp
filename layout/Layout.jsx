import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";

export const Layout = ({ children, page }) => {
  return (
    <div className="bg-yellow-200">
      <Head>
        <title>Kioskapp {page}</title>
      </Head>
      <div>
        <aside>
          <Sidebar/>
        </aside>
        <main>{children}</main> 
      </div>
    </div>
  );
};
