import ToggleTheme from "./components/ToggleTheme"

import { ThemeProvider } from "./context/ThemeProvider"

function App() {

  return (
    <>
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    </>
  )
}

export default App
