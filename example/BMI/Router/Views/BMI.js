import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import UITextView from '../Components/UITextView'


export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {

      }
  }
  static defaultProps() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View  style = {styles.UITextViewHeight}><UITextView  placeholder = '身高'/></View>
        <View  style = {styles.UITextViewWidth}><UITextView  placeholder = '體重'/></View>
        <Button style = {styles.button} title = '計算'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  UITextViewHeight: {
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5FCFF',
  },
  UITextViewWidth: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
