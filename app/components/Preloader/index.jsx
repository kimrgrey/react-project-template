import React, { Component } from 'react';
import Styles from './Styles.css';
import preloader from './preloader.gif';

class Preloader extends Component {
  renderMessage() {
    return (
      <div className={ Styles.message }>{ this.props.message }</div>
    );
  }

  render () {
    return (
      <div className={ Styles.container }>
        <img src={ preloader } />
        { this.props.message && this.renderMessage() }
      </div>
    );
  }
}

export default Preloader;
