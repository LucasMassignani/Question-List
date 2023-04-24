import React from 'react';
import { Outlet } from 'react-router-dom';
import { ConnectionCheckProvider } from '../../Providers/ConnectionCheckProvider';
import { HealthCheckProvider } from '../../Providers/HealthCheckProvider';
import { ReactQueryProvider } from '../../Providers/ReactQueryProvider';
import { Container, Content, GlobalStyle } from './styles';

export const Root = (): React.ReactElement => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <ReactQueryProvider>
        <ConnectionCheckProvider>
          <HealthCheckProvider>
            <Container>
              <Content>
                <Outlet />
              </Content>
            </Container>
          </HealthCheckProvider>
        </ConnectionCheckProvider>
      </ReactQueryProvider>
    </React.Fragment>
  );
};
