import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { Home } from "../view/components/Home";

export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={"about"}/>
          <Route path="/experience" element={"experience"}/>
          <Route path="/portfolio" element={"portfolio"}/>
          <Route path="/contact" element={"contact"}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}