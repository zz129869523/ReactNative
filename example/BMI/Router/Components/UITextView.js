import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class UITextView extends Component {

  constructor(props) {
    super(props);
      this.state = {
        placeholder: this.props.placeholder,
        text: ''
      }
  }
  static defaultProps = {
    placeholder: 'I am placeholder'
  }
  render() {
    return (
      <View style = {styles.view}>
        <TextInput
          style = {styles.textInput}
          placeholder = {this.state.placeholder}
          keyboardType = 'numeric'
          onChangeText = {this.props.onChangeText}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    },
  view: {
    height: 40,
  },
});
