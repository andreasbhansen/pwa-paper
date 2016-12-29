import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class PostListPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  componentDidMount() {
    this._setLoading(true);
    fetch('https://www.reddit.com/r/Art/.json')
      .then(res => res.json())
      .then(res => res.data.children.filter(post => post.data.preview).filter(post => !post.data.preview.images[0].source.url.match(/\.(gif)/g)))
      .then(posts => {
        this._setLoading(false);
        this.setState({ posts });
      });
  }

  _setLoading(loading) {
    this.setState({ loading });
  }

  renderRow(rowData) {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardButton} onPress={() => Actions.detailpage(rowData)}>
          <View>
            <Image style={styles.image} source={{ uri: rowData.data.preview.images[0].source.url }}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{rowData.data.title}</Text>
              </View>
            </Image>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ?
            <Text>Loading</Text> :
            <ListView
              enableEmptySections={true}
              style={styles.listView}
              dataSource={this.state.dataSource.cloneWithRows(this.state.posts)}
              renderRow={(rowData) => this.renderRow(rowData)}
              />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F9',
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 5,
    padding: 5
  },
  cardButton: {
    height: 200,
    alignSelf: 'stretch'
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'stretch',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  listView: {
    alignSelf: 'stretch',
    paddingTop: 64
  }
});