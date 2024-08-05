import {Button } from "./styles";


import menuDark from "../../assets/images/MenuDark.svg";

export default function ButtonHeader() {


  return (
    <Button type="button" >

        <img src={menuDark} alt="Menu" className="menu" />
    </Button>
  );
}
