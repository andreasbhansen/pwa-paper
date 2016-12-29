import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DetailPage extends Component {

  componentWillMount() {
    Actions.refresh({
      title: this.props.data.title
    });
  }

  render() {
    const post = this.props.data;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: post.preview.images[0].source.url }}></Image>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>By: {post.author}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  authorContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  authorText: {
    fontWeight: '200',
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
    fontStyle: 'italic'
  }
});