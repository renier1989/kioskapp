import KioskContext from "../context/KioskProvider"
import { useContext } from "react"

const useKiosk = () =>{
    return useContext(KioskContext)
}

export default useKiosk