import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import TwoMinute from './two_minute'

type Props = {}
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TwoMinute/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  }
})


AppRegistry.registerComponent(
  'my-rn-app-3', () => MyApp
)
