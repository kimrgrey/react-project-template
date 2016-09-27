import React, { Component } from 'react';

class Page extends Component {
  renderTitle () {
    return <h1>{ this.props.title }</h1>;
  }

  render() {
    const { title, beforeTitle, children } = this.props;
    return (
      <div>
        { beforeTitle }
        { title && this.renderTitle() }
        { children }
      </div>
    );
  }
}

export default Page;
