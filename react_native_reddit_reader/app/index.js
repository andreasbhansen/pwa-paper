import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

import PostListPage from './postlistpage';
import DetailPage from './detailpage';

export default class App extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="postlistpage" initial={true} component={PostListPage} title="Art by Reddit" />
        <Scene key="detailpage" component={DetailPage} navigationBarStyle={styles.navigationBarStyle} leftButtonIconStyle={styles.leftButtonIconStyle} titleStyle={styles.titleStyle} title="" />
      </Scene>
    </Router>
  }
}

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  leftButtonIconStyle: {
    tintColor: '#eee'
  },
  titleStyle: {
    color: 'white' 
  }
});