import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import UITextView from '../Components/UITextView'


export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {

      }
      this._onChangeHeight = this._onChangeHeight.bind(this);
      this._onChangeWeight = this._onChangeWeight.bind(this);
      this._handleCalc = this._handleCalc.bind(this);
  }
  _onChangeHeight (height) {

    this.setState({height: height})
  }
  _onChangeWeight (weight) {

    this.setState({weight: weight})
  }
  _handleCalc () {
    var w = this.state.weight
    var h = this.state.height / 100
    var ans = w / (h * h)
    this.setState({ans: ans})
  }
  static defaultProps() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.UITextViewHeight}><UITextView  placeholder = '身高' onChangeText={this._onChangeHeight}/></View>
        <Text> {this.state.height} </Text>
        <View style = {styles.UITextViewWeight}><UITextView  placeholder = '體重' onChangeText={this._onChangeWeight}/></View>
        <Text> {this.state.weight} </Text>
        <View style = {styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={this._handleCalc}>
          <Text style={styles.buttonText}> 計算 </Text>
        </TouchableOpacity>
        <Text> {this.state.ans} </Text>
        </View>

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
  UITextViewWeight: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
