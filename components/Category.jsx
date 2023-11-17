import Image from "next/image"

export const Category = ({category}) => {
    const {name,icon,id} = category
    
  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-yellow-400">
        <Image className="mr-5" width={70} height={70} src={`/assets/img/icono_${icon}.svg`} alt="image icon"/>
            <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            >
                {name}
            </button>
        
        </div>
  )
}
