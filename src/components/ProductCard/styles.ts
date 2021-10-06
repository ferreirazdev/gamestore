import styled from "styled-components";


export const Container = styled.div`
  background: var(--gray-800);
  border-radius: 30px;
  width: 220px;
  height: 220px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .buy {
      margin-top: 10px;
      width: 80%;
      height: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  margin: 12px 0;
  object-fit: contain;
`;

export const Name = styled.h1`
  font-size: 1rem;
  text-align: center;
`;

export const Price = styled.h1`

  font-size: 1rem;
`;
