import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home"
import NotFound from "./components/Pages/NotFound"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
