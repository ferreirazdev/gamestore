import styled from "styled-components";


export const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  padding: 10px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .buy {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Name = styled.h1`
  font-size: 1rem;
  text-align: center;
`;

export const Price = styled.h1`
  font-size: 1rem;
`;

export const ProductImage = styled.img`
  width: 100px;
`;