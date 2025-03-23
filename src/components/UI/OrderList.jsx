import React from "react";
import { Li } from "./Li";
import styled from "styled-components";

export const OrderList = ({ array, onIncrease, onDecrease }) => {
  return (
    <StyledUl>
      {array.map((item) => (
        <Li
          key={item.id}
          {...item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </StyledUl>
  );
};
const StyledUl = styled.ul`
  width: 100%;
  padding-left: 40px;
`;
