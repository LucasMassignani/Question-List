import styled from 'styled-components';

export const Header = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 10px;
`;

export const SearchContainer = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 0px 10px 10px 10px;
  width: 100%;

  & > * {
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  padding: 10px;
`;
