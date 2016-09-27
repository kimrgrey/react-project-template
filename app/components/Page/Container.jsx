import React from 'react';
import Styles from './Styles.css';

const Container = ({ children }) => (
  <div className={ Styles.container }>
    { children }
  </div>
);

export default Container;
