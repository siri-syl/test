import React, { Component } from 'react';
import { NavLink, Link, withRouter, Redirect } from "react-router-dom";
import './App.css';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.

class Sidebar extends Component {

  go = () => {
    this.props.history.go(1);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {

    const activeStyle = {
      background: 'skyBlue'
    };
    
    return (
    <section className="sidebar">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}
        <NavLink activeClassName="activeTweet" exact to ="/"><i className="far fa-comment-dots"></i></NavLink>
        {/* <NavLink activeStyle={activeStyle} to="/about"><i className="far fa-question-circle"></i></NavLink> */}
        <NavLink activeClassName="activeAbout" to="/about"><i className="far fa-question-circle"></i></NavLink>
        <NavLink activeClassName="activeMP" to="/mypage"><i className="far fa-user"></i></NavLink>
        <i onClick={this.goBack} className="far fa-arrow-alt-circle-left"></i>
    </section>
  );
  }
};

export default withRouter(Sidebar);
