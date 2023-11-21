import Image from "next/image";
import { useRouter } from "next/router";

export default function SidebarAdmin() {
    const router = useRouter();
    const handleChangeRoute = view => {
        
        if(view === 'admin'){
            router.push('/admin')
        }else{
            router.push('/admin/completed')
        }
    }
  return (
    <div>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
      />
      <div className="mt-3">
        <div className= {`${router.pathname === '/admin' ? 'bg-amber-500':''} flex w-full items-center gap-10 border p-5 hover:bg-amber-500 text-2xl font-bold justify-center`}>
          <button
          onClick={()=>handleChangeRoute('admin')}
          >Pending orders</button>
        </div>
        <div className={`${router.pathname !== '/admin' ? 'bg-amber-500':''} flex w-full items-center gap-10 border p-5 hover:bg-amber-500 text-2xl font-bold justify-center`}>
          <button
          onClick={()=>handleChangeRoute('completed')}
          >Completed orders</button>
        </div>
      </div>
    </div>
  );
}
