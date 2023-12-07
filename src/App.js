import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Configurator from "./pages/Configurator"
import Preview from "./pages/Preview"
import Finish from "./pages/Finish"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/configurator" element={<Configurator />}/>
        <Route path="/preview" element={<Preview />}/>
        <Route path="/finish" element={<Finish />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
