import React, { Fragment } from "react";

//component
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {

  return (
    <Fragment>
      <header className='fixed text-white flex justify-between w-full z-10 px-[10%] py-2 bg-red-900'>
        <h1 className="text-2xl font-bold mt-0 md:mt-2">Simpe Delivery</h1>
        <HeaderCartButton onShow={props.onShowCart} />
      </header>
      <div className='w-full h-96 overflow-hidden'>
        <img className="w-[200rem] h-full object-cover" src={mealsImage} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
