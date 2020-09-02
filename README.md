# 毛毛账吧

基于 React / ReactRouter / 自定义Hooks / webpack / localStorage 实现的极简主义记账应用

根据毛毛(我的一周岁宝宝)想玩手机，但是市场上的app大部分以游戏为主的需求出发，设计出一个极简的记账应用，让毛毛在玩的过程中，对数字有一个简单的概念。

该项目使我对TypeScript、webpack 和 Hooks API / SVG Icon有了深刻的理解，我将这些理解记录到项目中

----------------------------
## 技术栈
- create-react-app
- typescript
- react-router-dom 单层路由
- styled-component

先创建一个想要的目录

`create-react-app --version  // 3.4.1`

`yarn global add create-react-app@3.4.1`

已有路径之后 点 表示当前目录
`create-react-app . --template typescript`


由于我们需要添加一些webpack的配置，所以提前执行npm run eject


创建.env 文件 由于默认配置 会总是打开浏览器
`BROWSER=none`

js jsx ts tsx x extentions 支持标签

node_modules  -- node依赖
public        -- 静态文件
  favicon.ico -- 图标
  index.html  -- 首页
  robot.txt   -- 屏蔽网站
src           -- 源码
  App.tsx     主组件
  index.tsx   入口文件

  react-app-env ts特有的 类型声明 其中的注释有用

tsconfig      -- ts的配置文件

  <React.StrictMode> 严格模式 

### css

css reset 是把浏览器的默认样式重置
css normalize 不同浏览器的标签样式不同，normalize使得不同浏览器的默认样式相近

[create-react-app官网地址](https://create-react-app.dev/)

### scss
npm install node-sass@npm:dart-sass

## 绝对路径 react 支持

### css 不需要任何配置
src
  xxx
    aaa.scss   @import "yyy/bbb.scss"
  yyy
    bbb.scss    * { color: red !important }


### js ts 需要配置  [配置地址](https://create-react-app.dev/docs/importing-a-component#absolute-imports)


## helper.scss 
存放变量 函数 公用的内容

配置总结

1. 使用TS开发React应用
2. CSS 方面
- 使用@import-normalize;引入normalize.css
- 使用dart-sass编译SCSS文件至CSS
- 直接import "文件名"以引入src/文件名
- 将变量和函数放入src/helper.scss
- 使用styled-component这种CSS-in-js方案
- 在编译器里安装插件以流畅书写CSS
3. TS方面
- 配置tsconfig.json后使用import '文件名' 以引用 src/文件名

### styled-components 也需要ts的支持`npm install @types/styled-components`
**使用 styled(组件)的时候，组件内部必须要接受一个className属性**


## 安装[react-router-dom](https://reactrouter.com/web/example/basic)

`npm install react-router-dom`

ts的依赖  `@types/npm install react-router-dom`

### 默认路由
`<Redirect exact from="/" to="tags"/>`

### 没有找到路径的情况 放在switch的最下面
`<Route path="*"> <NoMatch/> </Route>`

### 思路
1. 确定页面url
- #/money 记账
- #/tags  标签
- #/statistics  统计
- 默认进入 #/money
- 最后添加一个404页面

### Router 有两种模式：History和Hash
如果你没有服务器，就只能用Hash
如果你有后台服务器，配置所有路由都跳转到index.html

这个项目暂时没有后台，所以暂时使用hashRouter


### 布局


### 字体 
[中文字体](https://zenozeng.github.io/fonts.css/)

- 屏幕 黑体
- 打印 宋体

字体大小: 16px;
默认行高： 1.15 惯例使用 1.2

一开始就确定，会影响以后的布局

## 使用svg
没办法自定义loader

`npm run eject`

`npm install svg-sprite-loader svgo-loader svgo -D`

svg-sprite-loader更新后 绕过了webpack的treeshaking

## 优化思路
- 事不过三，将svg抽离成<Icon/>
- 事不过三，将导航抽离成<Nav/>
- 事不过三，将布局抽离成<Layout/>


## Link 转 NavLink.activeClassName
`
<NavLink to="/tags" activeClassName="selected"><Icon name="tags"/>标签</NavLink>
`


## 受控组件和非受控组件
受控组件关心过程，
非受控组件不关心过程，只关心结果

React onChange 随时发生 和 Html onchange 鼠标移走之后的事件 早于onBlur


typescript在类型声明上的优秀表现 同时也展现出了 表驱动编程的优势
```javascript
const CategorySection: React.FC = () => {
  const categoryMap = {'+': '支出', '-': '收入'}
  type X = typeof categoryMap // 注意声明的是type
  type Y = keyof X            // 注意声明的是type
  const [categoryList] = useState<Y[]>(['+', '-'])
  const [category, setCategory] = useState<string>('-') // + 收入 - 支出
  
  return <Wrapper>
    <ul>
    {
      categoryList.map(c => 
      <li key={c} className={category === c? "selected": ""}
      onClick={() => setCategory(c)}>{categoryMap[c]}</li>)
    }
    </ul>
  </Wrapper>
}
```


### 如何监听多个按钮 可以事件委托

### 自定义hooks有一定的规则



### 自增函数与类的使用

函数组件内部再引用函数组件不支持ref


### 部署项目

### 自动部署

使用自动部署文件 deploy.sh时 需要运行一个 chmod +x scripts/deploy.sh