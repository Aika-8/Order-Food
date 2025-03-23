import React from "react";
import { Button } from "./Button";
import MinusVinous from "../../assets/images/minus vinous.png";
import PlusVinous from "../../assets/images/plus vinous.png";
import styled from "styled-components";

export const Li = ({ title, amount, price, id, onIncrease, onDecrease }) => {
  return (
    <StyledLi>
      <GlobalDivOfTitlePrice>
        <StyledPTag>{title}</StyledPTag>
        <StyledBlockAmountPrice>
          <StyledSpan>${(price * amount).toFixed(2)}</StyledSpan>
          <StyledDivAmount>x {amount}</StyledDivAmount>
        </StyledBlockAmountPrice>
      </GlobalDivOfTitlePrice>
      <IncreaseDecrease>
        <Button variant={"minus"}>
          <img src={MinusVinous} alt="minus" onClick={() => onDecrease(id)} />
        </Button>
        <Button variant={"plus"}>
          <img src={PlusVinous} alt="plus" onClick={() => onIncrease(id)} />
        </Button>
      </IncreaseDecrease>
    </StyledLi>
  );
};
const StyledLi = styled.li`
  width: 100%;
  height: 127px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(36, 36, 36, 0.08);
`;
const GlobalDivOfTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledPTag = styled.p`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
`;
const StyledBlockAmountPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
`;
const StyledSpan = styled.span`
  color: rgb(173, 85, 2);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const StyledDivAmount = styled.div`
  width: 46px;
  height: 36px;
  left: 139px;
  box-sizing: border-box;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
`;
const IncreaseDecrease = styled.div`
  display: flex;
  gap: 14px;
  padding-right: 20px
`;
