import AdminLayout from "@/layout/AdminLayout";

export default function admin() {
  return (
    <AdminLayout page={'Check Orders'}>
        <div>
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <p className="text-2xl my-8">Check the queue orders.</p>
        </div>
    </AdminLayout>
  )
}
