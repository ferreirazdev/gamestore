import styled from 'styled-components';
import { InputLabel, MenuItem, Select } from '@mui/material';

export const Container = styled.div`
  width: 98vw;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  align-self: center;
  margin: 50px 130px;
  padding: 50px 100px;
  border: 3px solid #1F2029;
  border-radius: 50px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SortBy = styled.div`
  margin-bottom: 10px;
  
  #sort-product-select {
    color: #fff;
    background: #8D1BA5;
    max-height: 10px;
    max-width: 50px;
  }
`;

export const TitleLabel = styled(InputLabel)`
  h1 {
    color: #fff;
    font-size: 18px;
  }
`;

export const SelectOptions = styled(Select)`
  
`;

export const Options = styled(MenuItem)`
  
`;

