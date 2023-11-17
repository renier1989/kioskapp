import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";

export const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Kioskapp {page}</title>
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
          {children}
          </div>
        </main>
      </div>
    </div>
  );
};
