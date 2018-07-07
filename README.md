## React Native 教學

### 入門教學

React Native 的中文教學實在太少，這邊先教大家最基礎的，架設環境的部分之後會在慢慢補上

如果喜歡我的教學可以給我一顆 Star 讓我有動力繼續寫下去到進階。

先從最經典的 BMI 開始吧！

### BMI

先建立一個資料夾好管理之後的專案

```
> mkdir ReactNativeProject
> cd ReactNativeProject/
```
建立你的專案名稱 (這裡我就叫BMI，可以自己改)

```
> react-native init BMI
```
跑的途中來開啟虛擬機吧

### 開啟虛擬機

#### Android

```
> emulator @react 
```

#### iOS

```
都用 MAC 了還要我教啊 (不會後面還有救)
```

### 開啟你的 APP 吧

先進到你的BMI專案裡

```
> cd BMI/
```

#### Android  
    react-native run-android
    
#### IOS
    react-native run-ios (mac會自動幫你開啟虛擬機 不怕不怕 沒有開啟的話就在打一次

成功之後大家應該會看到這樣

![](./images/IMG001.png)

成功之後就來看程式碼吧

### 程式碼

開啟目錄下的 App.js

![](./images/IMG002.png)

![](./images/IMG003.png)

ReactNative 也有生命週期，如果有興趣可以去 google 查一下

其中 render() 是他的進入點，裡面是它呈現在畫面上的元件 

要用什麼元件就 import 什麼進來

因為我們要做 BMI 所以需要 兩個輸入匡 和 一個按鈕

我們當然可以直接改成這樣

``` javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder = '身高'/>
        <TextInput placeholder = '體重'/>

        <Button title='計算' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

```


![](./images/video001.gif)


但這樣會有個問題，目前只有一個 View 所以寫起來沒有什麼障礙

不過隨便看個Facebook 光下面那排就有六個 View 了 

不管是開發的途中或是以後要維護都很麻煩

所以我們把它分類一下吧

我們在目錄底下建一個資料夾叫 Router 裡面再一個 Views

再來再建一個檔 BMI.js  像底下這樣

![](./images/IMG004.png)

把我寫好的基本頁面檔 page.js 程式碼貼到上面來

![](./images/IMG005.png)


把 App.js 改成這樣

``` javascript
// App.js

import React, {Component} from 'react';
import BMI from './Router/Views/BMI'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <BMI />
    );
  }
}
```

![](./images/IMG006.png =250x) 




















