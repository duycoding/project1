import { BrowserRouter, Routes, Route  } from "react-router-dom"
import About from "./pages/About"
import Signin from "./pages/Signin"
import SingUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/sign-up" element={<SingUp/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
