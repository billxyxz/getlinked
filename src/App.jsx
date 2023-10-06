import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Register from "./Components/Register"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
