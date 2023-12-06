import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Configurator from "./pages/Configurator"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
