import styled from "styled-components";

export const Container = styled.div`
  
`;

export const CartWrapper = styled.div`
  display: flex;
  
  div {
    h1 {
      z-index: 2;
      position: absolute;
      color: var(--gray-50);
      background-color: #8d1ba5;
      border-radius: 3px;
      font-size: 8px;
      padding: 5px;
      margin-left: 28px;
    }
  }

  img {
    z-index: 1;
    width: 40px;
    height: 40px;
  }
`;