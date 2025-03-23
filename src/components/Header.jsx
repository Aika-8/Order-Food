import React, { useState } from "react";
import "./Header.css";
import Basket from "../assets/icons/Basket.svg";
import { Modal } from "./UI/Modal";
import { OrderList } from "./UI/OrderList";
import styled from "styled-components";
import { Button } from "./UI/Button";
export const Header = ({ cartItems, setCartItems }) => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const handleBasketClick = () => {
    setIsBasketOpen((prev) => !prev);
  };
  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(2);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  return (
    <>
      <header>
        <h1 className="h1-header">ReactMeals</h1>
        <div className="basketBlock">
          <div className="basket-p">
            <img src={Basket} alt="basket" className="basket" />
            <p className="heading-pTag">Your Cart</p>
          </div>
          <span className="span-counter" onClick={handleBasketClick}>
            {cartItems.length}
          </span>
        </div>
      </header>
      {isBasketOpen && (
        <Modal onClose={handleBasketClick}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {cartItems.length === 0 ? (
              <>
                <StyledH2>Total Amount</StyledH2>
                <div className="div-cost">
                  <StyledSpan>${totalAmount}</StyledSpan>
                  <Button variant={"close"} onClick={handleBasketClick}>
                    Close
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="modal-container2">
                    <OrderList
                      array={cartItems}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                    />
                  </div>
                  <div className="containerofCost">
                    <div className="TotalAmount">
                      <StyledH2>Total Amount</StyledH2>
                    </div>
                    <div className="div-cost2">
                      <StyledSpan>${totalAmount}</StyledSpan>
                      <div className="div-orderingClosing">
                        <Button variant={"close"} onClick={handleBasketClick}>
                          Close
                        </Button>
                        <Button variant={"order"}>Order</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
const StyledH2 = styled.h2`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
`;
const StyledSpan = styled.span`
  color: rgb(138, 43, 6);
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0px;
`;
