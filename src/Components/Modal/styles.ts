import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  background-color: #ffffff;
`;
