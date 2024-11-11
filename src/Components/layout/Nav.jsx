import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="custom-nav">
        <ul className="cont-ul">
        <li className="develop">
            <li className="front">

              {/* <ul className="ul-third"> */}
              <li className="back"><NavLink to="/social/crear-cliente">Clientes </NavLink></li>
              {/* </ul> */}
            </li>
          </li>

          <li className="develop">
            <NavLink aria-current="page" to="/social/salir">Salir</NavLink>
          </li>
        </ul>
        {/* partes del medio superior */}


        {/* parte medio inferior */}

       
      </nav>

    </>
  );
};

export default Nav;