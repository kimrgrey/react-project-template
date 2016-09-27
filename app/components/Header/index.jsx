import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Styles from './Styles.css';
import { openSideBar, closeSideBar } from 'actions/app';

class Header extends Component {
  toggleSideBar() {
    const { sideBar } = this.props;

    if (sideBar.open) {
      this.props.closeSideBar();
    } else {
      this.props.openSideBar();
    }
  }

  render() {
    return (
      <AppBar
        title={ <Link to="/" className={ Styles.logo }>React Project Template</Link> }
        onLeftIconButtonTouchTap={ () => this.toggleSideBar() }
      />
    );
  }
}

const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => bindActionCreators({ openSideBar, closeSideBar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
