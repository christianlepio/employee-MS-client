// this will change the document title on top, dynamically
import { useEffect } from "react"
import useAuth from "./useAuth"

const useTitle = (title) => {
    const { setActvLink } = useAuth()

    useEffect(() => {
        setActvLink(title)
        const prevTitle = document.title
        document.title = title

        return () => document.title = prevTitle
    }, [title])
}

export default useTitle