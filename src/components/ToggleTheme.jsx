import { useContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

const ToggleTheme = () => {
    const {isDark, setIsDark, setTextColor} = useAuth()
    const [themeIcon, setThemeIcon] = useState('')

    useEffect(() => {
        localStorage.setItem('themese', isDark)
        document.querySelector("html").setAttribute('data-bs-theme', (isDark ? 'dark' : 'light'))

        if (isDark) {
            setTextColor('text-light')
            setThemeIcon('bi-moon-stars')
        } else {
            setTextColor('text-secondary')
            setThemeIcon('bi-sun-fill')
        }
    }, [isDark])

    return (
        <>
            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button 
                    className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button" 
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)"
                >
                    <i className={`bi ${themeIcon} theme-icon-active mb-2`}></i>
                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <li>
                        <button 
                            type="button"
                            className={"dropdown-item d-flex align-items-center " + (!isDark ? 'active' : null)}
                            data-bs-theme-value="light" 
                            aria-pressed="false" 
                            onClick={() => setIsDark(false)}
                        >
                            <i className="bi bi-sun-fill opacity-50 theme-icon me-2 mb-1"></i>
                            Light
                            <i className={"bi bi-check2 ms-auto mb-1 " + (!isDark ? null : 'd-none')}></i>
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className={"dropdown-item d-flex align-items-center " + (isDark ? 'active' : null)}
                            data-bs-theme-value="dark" 
                            aria-pressed="false"
                            onClick={() => setIsDark(true)}
                        >
                            <i className="bi bi-moon-stars opacity-50 theme-icon me-2 mb-1"></i>
                            Dark
                            <i className={"bi bi-check2 ms-auto mb-1 " + (isDark ? null : 'd-none')}></i>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ToggleTheme