import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';  // 收鍵盤
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
    var { height, weight } = this.state;
    var h = height / 100;
    var ans = (weight / (h * h)).toFixed(2);

    var ansStr = 'your BMI: ' + ans
    this.setState({ansStr: ansStr})
  }
  _onPress() {
    dismissKeyboard();
  }
  static defaultProps() {

  }
  render() {
    return (
      <TouchableWithoutFeedback onPress = {this._onPress}  style={{flex: 1}}>
        <View style={styles.container}>
          <View style = {styles.UITextViewHeight}><UITextView  placeholder = '身高' onChangeText={this._onChangeHeight}/></View>

          <View style = {styles.UITextViewWeight}><UITextView  placeholder = '體重' onChangeText={this._onChangeWeight}/></View>


          <TouchableOpacity style={styles.button} onPress={this._handleCalc}>
            <Text style={styles.buttonText}> 計算 </Text>
          </TouchableOpacity>
          <View style={styles.ansView}>
            <Text > {this.state.ansStr} </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
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
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 20,
    marginTop: 30,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ansView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ansStr: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
