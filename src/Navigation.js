import Home from "./Pages/Home";
import Contactus from "./Contact/Contactus";
import Service from "./Services/Service";
import About from "./AboutUs/About";
import { Routes, Route } from "react-router-dom";

export default function  Navigation (){
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/Contact" element={<Contactus />} />
  <Route path="/Service" element={<Service/>}/>
  <Route path="/About" element={<About/>}/>
</Routes>

  )
}
