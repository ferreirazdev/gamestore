import styled from 'styled-components';

export const Container = styled.div`
  width: 98vw;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-900);
  display: flex;
`; 

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-right: 3px solid #1F2029;
  padding: 0 100px;
  cursor: pointer;
  
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    color: var(--gray-50);
    font-size: 20px;
    font-weight: 800;
  }
`;

export const SearchWrapper = styled.div`
    border-radius: 30px;
    background: #1F2029;
    padding: 5px 15px;
    width: 40%;
    justify-content: center;
    align-items: center;
    
  input {
    width: 100%;
    color: var(--gray-50);
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 0 100px;
  border-left: 3px solid #1F2029;
  display: flex;
  align-items: center;

  button {
    width: 70px;
    height: 40px;
    background: #8d1ba5;
    border: none;
    border-radius: 10px;
    color: var(--gray-50);
    font-weight: 500;
    margin-left: 30px;
    &:hover {
      background: #A100C2;
    }
  }
`;