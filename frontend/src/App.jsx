import {Routes,Route} from "react-router-dom"; 

import Home from "./pages/Home.jsx"; 
import Login from "./pages/Login.jsx"
import Logout from "./pages/Logout.jsx";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}