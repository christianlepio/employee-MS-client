import AppRoutes from "./components/AppRoutes"
import ToggleTheme from "./components/ToggleTheme"

import { ThemeProvider } from "./context/ThemeProvider"
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <ThemeProvider>
          <AppRoutes />
          <ToggleTheme />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
