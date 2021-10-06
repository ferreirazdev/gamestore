import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
`;
export const ItemContainer = styled.div`
  border-radius: 0px 20px;
  border: 3px solid #1F2029;
  width: 70%;
  padding-top: 10px;
`;
export const ItemWrapper = styled.div``;
export const PurchaseConfirmationContainer = styled.div`
  width: 30%;
  position: fixed;
  right: 0;
`;
export const PurchaseConfirmationWrapper = styled.div`
  padding: 20px;
  justify-content: center;
  align-content: center;

  .title {
    font-size: 25px;
    text-align: center;
    color: #A100C2;
    margin-bottom: 10px;
  }

  .infoPurchase{
    align-items: center;
    display: flex;

    h1 {
      font-size: 18px;
      color: var(--gray-50);
      margin-right: 10px;
    }

    p {
      color: var(--gray-50);

      &.total{
        color: #A100C2;
        font-weight: 800;
      }
    }


  }
`;

export const Button = styled.button`
  font-size: 17px;
  width: 80%;
  height: 40px;
  background: #8d1ba5;
  margin: 50px 20px;
  border: none;
  border-radius: 10px;
  color: var(--gray-50);
  font-weight: 500;
  &:hover {
    background: #A100C2;
  }
`;

