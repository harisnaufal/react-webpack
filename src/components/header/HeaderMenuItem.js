import React, { Component } from 'react';
import './HeaderMenuItem.scss';

export default class HeaderItem extends Component {

  render() {
    const { menu } = this.props;
    return ( 
      <div className="header-item">
        <a href={menu.path}>
          {menu.link}
        </a>
      </div>
    );
  }
}
