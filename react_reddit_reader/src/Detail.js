import React, { Component } from 'react';
import { Layout, Header, Content, IconButton, HeaderRow } from 'react-mdl';
import { browserHistory } from 'react-router'
import './App.css';

export default class Detail extends Component {

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    const post = this.props.router.location.query;
    return (
      <Layout fixedHeader>
        <header className="mdl-layout__header is-casting-shadow">
          <IconButton name="arrow_back" className="mdl-layout-icon" onClick={() => this.props.router.goBack()} />
          <HeaderRow title={post.title}></HeaderRow>
        </header>
        <Content style={{ backgroundColor: 'black' }}>
          <img style={{ width: '100%', height: '300px', alignSelf: 'center' }} src={post.image} />

          <p style={{ textAlign: 'center', color: 'white', fontStyle: 'italic', marginTop: '10%' }}>By {post.author}</p>
        </Content>
      </Layout>
    );
  }
}
