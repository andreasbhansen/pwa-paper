import React, { Component } from 'react';
import { List, ListItem, Layout, Header, Content, Card } from 'react-mdl';
import { browserHistory } from 'react-router'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this._navigateDetailPage = this._navigateDetailPage.bind(this);

    this.state = {
      posts: [],
      loading: false
    };
  }

  componentDidMount() {
    this._setLoading(true);
    fetch('https://www.reddit.com/r/Art/.json')
      .then(res => res.json())
      .then(res => res.data.children.filter(post => post.data.preview).filter(post => !post.data.preview.images[0].source.url.match(/\.(gif)/g)))
      .then(posts => {
        this.setState({ posts });
        this._setLoading(false);
        console.log(this.state.posts)
      });
  }

  _setLoading(loading) {
    this.setState({ loading });
  }

  _navigateDetailPage(post) {
    this.props.router.push({
      pathname: '/detail',
      query: {
        title: post.data.title,
        image: post.data.preview.images[0].source.url,
        author: post.data.author,
      }
    })
  }

  _renderListRow(post, i) {
    return (
      <ListItem key={i} onClick={() => this._navigateDetailPage(post)}>
        <Card shadow={0} style={{ display: 'flex', flex: 1, height: '320px', width: '512px', margin: 'auto', background: `url(${post.data.preview.images[0].source.url}) center / cover` }}>
          <div style={{ display: 'flex', flex: 1, height: '320px', width: '100%', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
            <span style={{ color: '#fff', fontSize: '1.3em', textAlign: 'center', padding: '10px', fontWeight: '700', alignSelf: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              {post.data.title}
            </span>
          </div>
        </Card>
      </ListItem>
    );
  }

  _renderList() {
    return (
      <List>
        {
          this.state.posts.map((post, i) => this._renderListRow(post, i))
        }
      </List>
    );
  }

  render() {
    return (
      <Layout fixedHeader>
        <Header title={<span><strong>Art by Reddit</strong></span>}>
        </Header>
        <Content>
          {
            this.state.loading ?
              'loading' : this._renderList()
          }
        </Content>
      </Layout>
    );
  }
}
