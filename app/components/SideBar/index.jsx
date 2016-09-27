import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { openSideBar, closeSideBar } from 'actions/app';
import Styles from './Styles.css';
import { map } from 'lodash';

const ITEMS = [
  { path: '/home', name: 'Home'},
  { path: '/about', name: 'About'},
];

class SideBar extends Component {
  changeOpen(open) {
    if (open) {
      this.props.openSideBar()
    } else {
      this.props.closeSideBar();
    }
  }

  render() {
    const items = map(ITEMS, (item) => (
      <Link key={ item.path} className={ Styles.link } to={ item.path }>
        <MenuItem>{ item.name }</MenuItem>
      </Link>
    ));

    return (
      <Drawer
        docked={ false }
        open={ this.props.open }
        onRequestChange={ (open) => this.changeOpen(open) }
      >
        { items }
      </Drawer>
    );
  }
}

const mapStateToProps = state => state.app.sideBar;
const mapDispatchToProps = dispatch => bindActionCreators({ openSideBar, closeSideBar }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
