import Proptypes from 'prop-types';

import {Button } from "./styles";


import menuDark from "../../assets/images/MenuDark.svg";

export default function ButtonHeader(active) {


  return (
    <Button type="button" >
        {active && console.log("To dentro")}
        <img src={menuDark} alt="Menu" className="menu" />
    </Button>
  );
}

ButtonHeader.propyTypes = {
  active: Proptypes.bool.isRequired,

}

ButtonHeader.defaultProps = {
  active: false

}



