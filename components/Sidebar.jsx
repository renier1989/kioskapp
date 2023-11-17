import useKiosk from "../hooks/useKiosk"

export const Sidebar = () => {
    const {categories, algo} = useKiosk()
  return (
    <div>sidebar - 
        {/* {algo} */}
        <ul>
            {categories?.map(cat=>(
                <li key={cat.id}>{cat.name}</li>
            ))}
        </ul>
    </div>
  )
}
