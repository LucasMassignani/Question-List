import React from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { HealthCheckProvider } from '../../Providers/HealthCheckProvider';
import { ReactQueryProvider } from '../../Providers/ReactQueryProvider';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

export const Root = (): React.ReactElement => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <ReactQueryProvider>
        <HealthCheckProvider>
          <Outlet />
        </HealthCheckProvider>
      </ReactQueryProvider>
    </React.Fragment>
  );
};
