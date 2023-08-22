import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";



export function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}>

          <Route path="/"/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}