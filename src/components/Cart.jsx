import React from "react";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
} from "../app/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {cartItems?.length == 0 ? (
            <CartEmpty />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => {
                  return <CartItem key={i} item={item} />;
                })}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5 ">000</h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                  <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
