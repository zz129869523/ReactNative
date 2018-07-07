## React Native 教學

### 入門教學

React Native 的中文教學實在太少，這邊先教大家最基礎的，架設環境的部分之後會再慢慢補上

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

把我寫好的基本頁面檔 [page.js](https://github.com/zz129869523/ReactNative/blob/master/page.js) 程式碼貼到上面來

![](./images/IMG005.png)


把 App.js 改成這樣

``` javascript
// App.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import BMI from './Router/Views/BMI'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <BMI />
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

### 重新載入

#### Android

```
按兩下 Ｒ 
或者 command + M 的 reload
```
#### iOS
```
command + R
```

<img src="./images/IMG006.png" width="350"> 

成功之後我們去 BMI.js 建 View 吧

進來先把 App 改成 BMI 不影響程式 可是我們比較好認

``` javascript
export default class BMI extends Component 
```

TextInput 有很多屬性可以用 可以去官網看 [TextInput](https://facebook.github.io/react-native/docs/textinput.html)

常用的像是

- placeholder 
- value 					直接給值好像很沒有用 哈哈
- onChangeText			改變值的時候會馬上傳給你 Type function
- keyboardType			鍵盤類型
- onFoucs					點到她的時候觸發function Type function
- secureTextEntry		變＊＊＊

來試看看吧

修改一下 BMI.js 

``` javascript
// BMI.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {
        text: 'I am value'
      }
  }
  static defaultProps = {

  }

  _onChangeText(value) {

    this.setState({text: value})

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = "體重"
          value = "123456"
          onChangeText = {(value) => this._onChangeText(value)}
        />
        <Text>{this.state.text}</Text>
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

![](./images/video002.gif)

state 是 ReactNative 拿來儲存變數資料用的

所以一開始值是 123456 而 this.state.text是 'I am value'

setState() 可以宣告值，修改值也可以

當改動時 會叫到函數 _onChangeText()

因為onchangeText是即時的 所以上面的text會馬上更改

### Components

不過現在又有個問題了 只是一個輸入匡就這麼大 之後看的人會很辛苦 所以我們把它寫一個專屬的元件吧

我們在 Router 底下再建一個資料夾 Components 個人習慣所以叫做UITextView.js

一樣 [page.js](https://github.com/zz129869523/ReactNative/blob/master/page.js) 貼上

![](./images/IMG007.png)

改成專門處理 UITextView 的元件

```javascript 
// UITextView.js

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

      }
  }
  static defaultProps = {

  }
  render() {
    return (
      <View>
        <TextInput
          placeholder = "體重"
          keyboardType = 'numeric'
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
```
BMI.js 也一起改

```javascript 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UITextView from '../Components/UITextView'
export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {
      }
  }
  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <UITextView />
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
跑看看

![](./images/video003.gif)


### 排版

用這麼久終於到很重要的排版與樣式了 

React Native 佈局方式是 FlexBox

學這麼久一定對下面 styles 的
``` 
justifyContent: 'center',
 alignItems: 'center',
```
很有疑問吧

排版分這四大類 

- flexDirection enum('row', 'column','row-reverse','column-reverse')
- flexWrap enum('wrap', 'nowrap')
- justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
- alignItems enum('flex-start', 'flex-end', 'center', 'stretch')


為了學會排版 我寫了一個 View

### justifyContent


``` html
<View style={{flex: 1,justifyContent: 'flex-start',backgroundColor: '#F5FCFF',}}>
	<View style={{width: 200,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
   		<Text style = {{color: 'white',}}>justifyContent: 'flex-start'</Text>
    </View>
</View>
```

<img src="./images/IMG008.png" width="350"> 

justifyContent 是負責 `垂直` 的 

方式就是管理在自己範圍內的所以元件都必須遵守

第一個 View 規定裡面的 View 必須在 flex-start 的位置上

第二個 View 規定裡面的 Text 必須 在正中間

justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')

來試試其他的

<img src="./images/IMG009.png" width="350"> 

### alignItems

alignItems 是負責 `水平` 的 

alignItems enum('flex-start', 'flex-end', 'center', 'stretch')

<img src="./images/IMG010.png" width="350">
<img src="./images/IMG011.png" width="350"> 
<img src="./images/IMG012.png" width="350"> 

如果你一次三個的話他會變成這樣

``` html
<View style={{flex: 1, }}>
	<View style={{flex: 1,alignItems: 'flex-start',backgroundColor: '#F5FCFF',}}>
		<View style={{width: 100,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
    		<Text style = {{color: 'white',}}>alignItems: 'flex-start'</Text>
  		</View>
	</View>
	<View style={{flex: 1,alignItems: 'center',backgroundColor: '#F5FCFF',}}>
  		<View style={{width: 100,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
      		<Text style = {{color: 'white',}}>alignItems: 'center'</Text>
	  	</View>
	</View>
	<View style={{flex: 1,alignItems: 'flex-end',backgroundColor: '#F5FCFF',}}>
	  	<View style={{width: 100,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
	    	<Text style = {{color: 'white',}}>alignItems: 'flex-end'</Text>
	  	</View>
	</View>
</View>
```

<img src="./images/IMG013.png" width="350"> 

因為 React Native 預設值的排列方式垂直的

上個顏色比較好懂

<img src="./images/IMG014.png" width="350">

外面的 View style 加上{{flexDirection:'row',}} 就行了

<img src="./images/IMG015.png" width="350">

<img src="./images/IMG016.png" width="350">

所以兩個一起來當然也可以囉

<img src="./images/IMG017.png" width="350">

### flex

用 flex 來分配整個畫面的比例 

``` html
<View style={{flex: 1, }}>

	<View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'skyblue',}}>
		<View style={{width: 200,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
     			<Text style = {{color: 'white',}}>flex: 1</Text>
		</View>
	</View>

  	<View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'yellow',}}>
    		<View style={{width: 200,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
    			<Text style = {{color: 'white',}}>flex: 1</Text>
     		</View>
  	</View>
  	
</View>
```
<img src="./images/IMG018.png" width="350">

<img src="./images/IMG019.png" width="350">

# 最後了 加油

除了以上的那幾個格子還是不夠用的 就差樓下幾樣東西了

#### 圖示邊匡

我習慣性直翻 哈哈

- borderBottomWidth number  邊邊底部寬度
- borderLeftWidth number 邊邊左邊寬度
- borderRightWidth number 邊邊右邊寬度
- borderTopWidth number 邊邊上面寬度
- borderWidth number 邊邊寬度
- borderBottomColor 'red' '#2fb32a' 邊邊底部顏色
- borderLeftColor 邊邊左邊顏色
- borderRightColor 邊邊右邊顏色
- borderTopColor 邊邊上面顏色
- borderColor 邊邊顏色
- borderRadius 邊邊圓形程度

#### 尺寸

- width number
- height number

#### 外邊距

- margin number 外邊距
- marginTop number 上外邊距
- marginBottom number 下外邊距
- marginLeft number 左外邊距
- marginRight number 右外邊距
- marginVertical number 上下外邊距
- marginHorizontal number 左右外邊距


#### 內邊距

- padding number 內邊距
- paddingTop number 上內邊距
- paddingBottom number 下內邊距
- paddingLeft number 左內邊距
- paddingRight number 右內邊距
- paddingVertical number 上下內邊距
- paddingHorizontal number 左右內邊距

馬上來個例句吧

``` html
<View style={{flex: 1,backgroundColor: '#F5FCFF',}}>
	<View style={{height: 100}}>
		<TextInput style={{flex:1, borderWidth: 3, borderColor: 'blue', borderRadius: 10}}/>
	</View>
</View>
```

看這醜醜的輸入匡 有著 寬度: 3 的藍色邊邊，flex:1 讓他佔滿整個 view 


<img src="./images/IMG020.png" width="350">

當然你也可以單獨加厚某一邊或換顏色

``` html
<View style={{flex: 1,backgroundColor: '#F5FCFF',}}>
	<View style={{height: 100}}>
		<TextInput style={{flex:1, borderWidth: 3, borderLeftWidth: 50, borderRightColor: 'yellow', borderColor: 'blue', borderRadius: 10, }}/>
	</View>
</View>
```

<img src="./images/IMG021.png" width="350">

### margin 和 padding

``` html
<View style={{flex: 1,backgroundColor: '#F5FCFF'}}>
	<View style={{height: 100 ,marginTop: 50,backgroundColor: 'red'}}>
		<TextInput style={{flex:1, borderWidth: 3, borderColor: 'blue', borderRadius: 10}}  value='marginTop: 50'/>
	</View>
</View>
```
<img src="./images/IMG022.png" width="350">

``` html
<View style={{flex: 1,backgroundColor: '#F5FCFF'}}>
	<View style={{height: 100 ,paddingTop: 50,backgroundColor: 'red'}}>
		<TextInput style={{flex:1, borderWidth: 3, borderColor: 'blue', borderRadius: 10}}  value='paddingTop: 50'/>
	</View>
</View>
```
<img src="./images/IMG023.png" width="350">

### 太棒了 你學會了大部分的畫面配置了 趕快繼續完成我們的 BMI

先將 BMI.js 下面的置中拿掉

``` javascript
// BMI.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import UITextView from '../Components/UITextView'
export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {
      }
  }
  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <UITextView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
```
來做 TextInput 的 UI 吧

```javascript
//UITextView.js

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

      }
  }
  static defaultProps = {

  }
  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          placeholder = "體重"
          keyboardType = 'numeric'
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
```

<img src="./images/IMG024.png" width="350">

好像太上面了. 在 BMI.js 為他做約束

``` javascript
// BMI.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import UITextView from '../Components/UITextView'
export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {
      }
  }
  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.UITextViewHeight}><UITextView /></View>
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
});

```


<img src="./images/IMG025.png" width="350">

把其他元件加上去

``` javascript
//BMI.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import UITextView from '../Components/UITextView'
export default class BMI extends Component {

  constructor(props) {
    super(props);
      this.state = {
      }
  }
  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.UITextViewHeight}><UITextView /></View>
        <View style = {styles.UITextViewWeight}><UITextView /></View>

        <Button title='計算'/>
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
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F5FCFF',
  },
});
```

<img src="./images/IMG026.png" width="350">

























