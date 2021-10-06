import styled from "styled-components";


export const Container = styled.div`
  background: var(--gray-900);
  border: 3px solid #1F2029;
  border-radius: 30px;
  width: 250px;
  height: 100%;
  padding: 20px;
  margin: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 80%;
  
  padding: 12px 12px;
  object-fit: contain;
`;

export const Name = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 800;
  color: var(--gray-50);
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
  }
`;

export const Price = styled.h1`
  font-size: 15px;
  color: #fff;
`;
export const Score = styled.h1`
  font-size: 15px;
  color: #F1F52E;
`;

export const Button = styled.button`
  width: 80%;
  height: 30px;
  background: #8d1ba5;
  margin: 10px 20px;
  border: none;
  border-radius: 10px;
  color: var(--gray-50);
  font-weight: 500;
  &:hover {
    background: #A100C2;
  }
`;