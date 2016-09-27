import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container } from 'components/Page';
import Header from 'components/Header';
import SideBar from 'components/SideBar';

const Application = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <Header />
      <SideBar />
      <Container>{ children }</Container>
    </div>
  </MuiThemeProvider>
);

export default Application;
