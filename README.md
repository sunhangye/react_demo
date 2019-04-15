This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 子组件通信
```
import PubSub from 'pubsub-js';

// 发布消息
PubSub.publish(EventName, pubsubData)

// 订阅消息
PubSub.subscribe(EventName, (msg, pubsubData) => {
  
})


```

#### Link
现在，我们应用需要在各个页面间切换，如果使用锚点元素实现，在每次点击时，页面被重新加载，React Router提供了<Link>组件用来避免这种状况发生。当 你点击<Link>时，url会更新，组件会被重新渲染，但是页面不会重新加载
```
// to为string
<Link to="/about">关于</Link>
 
// to为obj
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>
 
// replace 
<Link to="/courses" replace />

```
<Link>使用to参数来描述需要定位的页面。它的值既可是字符串，也可以是location对象（包含pathname、search、hash、与state属性）如果其值为字符串，将会被转换为location对象

#### NavLink
<NavLink>是<Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数
* activeClassName(string)：设置选中样式，默认值为active
* activeStyle(object)：当元素被选中时，为此元素添加样式
* exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
* strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
* isActive(func)判断链接是否激活的额外逻辑的功能

```
// activeClassName选中时样式为selected
<NavLink
  to="/faq"
  activeClassName="selected"
>FAQs</NavLink>
 
// 选中时样式为activeStyle的样式设置
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>
 
// 当event id为奇数的时候，激活链接
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}
 
<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>
```

### Redux
Reducer - 函数
   -| 数据 state  
   -| 操作数据action
Store  - 保存数据的地方

app.js  store -> action -> state -> ui 

Reducer(state, action) { action操作state }
