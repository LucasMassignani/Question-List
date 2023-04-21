import styled from 'styled-components';

export const ShareContainer = styled.div`
  width: 100%;

  & > *:not(:first-child) {
    margin-top: 10px;
  }

  input {
    width: 100%;
  }
`;

export const FooterContent = styled.div`
  & > * {
    margin-right: 10px;
  }
`;
