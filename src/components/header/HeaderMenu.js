import React, { Component } from 'react';
import config from '../../config/config';
import HeaderItem from './HeaderMenuItem';
import './HeaderMenu.scss';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    }
  }

  generateMenu() {
    const { header } = config;
    let menus;
    if (header) {
      menus =  header.map((item, index) => {
        return (
          <HeaderItem key={index} menu={item}/>
        );
      });
    }
    return menus;
  }

  openMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    return ( 
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="header__wrapper hidden-xs">
              <div className="menu-wrapper">
                <div className="logo">
                  <a href="/"><h1><span>Connecta 2.0</span></h1></a>
                </div>
                <div className="links">
                  {this.generateMenu()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
