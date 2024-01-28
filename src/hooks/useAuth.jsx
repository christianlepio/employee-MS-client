import { useContext } from "react"
import ThemeContext from "../context/ThemeProvider"

const useAuth = () => {
    return useContext(ThemeContext)
}

export default useAuth