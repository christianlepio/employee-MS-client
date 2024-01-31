import { createContext, useState } from 'react'

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('themese')) || false)
    const [textColor, setTextColor] = useState('text-light')

    const [auth, setAuth] = useState({})
    
    const [actvLink, setActvLink] = useState('')

    return (
        <ThemeContext.Provider 
            value={{ 
                isDark, 
                setIsDark, 
                textColor, 
                setTextColor, 
                auth, 
                setAuth, 
                actvLink, 
                setActvLink 
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext