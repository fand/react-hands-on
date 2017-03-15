# react-hands-on

[FRONTEND CONFERENCE 2017](http://kfug.jp/frontconf2017/) でのReactハンズオン用レポジトリです。

## 目次

- [このテキストの読み方](#このテキストの読み方)
- [Step 0: レポジトリをcloneする](#step-0-レポジトリをcloneする)
- [Step 1: サーバーを起動する](#step-1-サーバーを起動する)
- [Step 2: Aboutページを追加](#step-2-aboutページを追加)
- [Step 3: Layoutコンポーネントを作る](#step-3-layoutコンポーネントを作る)
- [Step 4: CSSを導入する](#step-4-cssを導入する)
- [Step 5: ハンバーガーボタンを作る](#step-5-ハンバーガーボタンを作る)
- [Step 6: ハンバーガーボタンを動かす](#step-6-ハンバーガーボタンを動かす)
- [Step 7: サイドバーを作る](#step-7-サイドバーを作る)
- [Step 8: サイドバーを動かす](#step-8-サイドバーを動かす)

## このテキストの読み方

このテキストでは、既にあるファイルの編集を表現するために `diff` という形式を利用します。  
例えば、次のdiffは「 `テクスト` を `テキスト` に修正し、 `yo` という行を追加する」という編集内容をあらわしています。

```diff
これは
-テクスト
+テキスト
です
+yo
```

## Step 0: レポジトリをcloneする

最初にこのレポジトリを `git clone` します。  
依存ライブラリもインストールしておきましょう。

以下のコマンドを順番にターミナルに入力し、実行してください。  
(`$` は入力しません)

```
$ git clone https://github.com/fand/react-hands-on
$ cd react-hands-on
$ npm install
```

## Step 1: サーバーを起動する

ターミナルで以下の内容を入力します。

```
$ npm run dev
```

ブラウザで http://localhost:3000/ を開いてみてください。  
成功すれば次のような画面が表示されるはずです。

![step-1](https://cloud.githubusercontent.com/assets/1403842/23955348/fe8346f4-09dc-11e7-93e7-91b6aec5f429.png)

`pages/index.js` を開くと、トップページの内容が記述されているのがわかります。  
ついでに `<p>` の中身を適当に変更して、画面にリアルタイムに反映されることを確認してみましょう。<sup>[1](#hmr)</sup>

![step-1-hmr](https://cloud.githubusercontent.com/assets/1403842/23980265/14e22720-0a42-11e7-9e52-e6c5741cd187.gif)

ブラウザの開発者ツールを開いてみると、HTML内に既にReactコンポーネントが描画されていることがわかります。<sup>[2](#ssr)</sup>

![step-1-ssr](https://cloud.githubusercontent.com/assets/1403842/23980266/1518cf28-0a42-11e7-8be1-93dbc2a26395.png)

## Step 2: Aboutページを追加

`pages/about.js` を作成して、以下の内容を追加します。  
(`<p>` の中身は適当でいいです)

```js
import Layout from '../components/layout'

/**
 * Aboutページに対応するReactコンポーネント
 */
export default () => (
  <div>
    <h2>About me</h2>

    <p>
      Aenean rhoncus augue at maximus pharetra. Nulla bibendum justo quis nisl faucibus volutpat. Aenean ornare dolor quam, ut molestie mi condimentum in. Proin turpis sapien, scelerisque sed convallis non, efficitur in eros. Sed non neque purus. Aliquam venenatis sagittis enim. Sed massa orci, dictum ut ante vitae, posuere imperdiet dui.
    </p>
  </div>
)
```

ブラウザで http://localhost:3000/about にアクセスしてみましょう。

![step-2](https://cloud.githubusercontent.com/assets/1403842/23955349/fe9ee238-09dc-11e7-86b0-782ba8a1d4fb.png)

## Step 3: Layoutコンポーネントを作る

`components/layout.js` を作成し、以下の内容を追加します。  
ここでは、ページタイトル、viewport、および全ページ共通の見出しを追加しました。

```javascript
import Head from 'next/head'

/**
 * 全ページ共通のレイアウト
 *
 * titleやmeta等、HTMLのhead要素にあたる情報は
 * Headコンポーネント内に書く
 */
export default (props) => (
  <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>

    <div>
      <header>
        <h1>⚡ハロー、React⚡</h1>
      </header>
      <div>
        { props.children }
      </div>
    </div>
  </div>
)
```

次に、 `pages/` 内のコンポーネントを `<Layout>` で囲みます。

`pages/index.js` を編集します。

```diff
import React from 'react'
+import Layout from '../components/layout'

/**
 * トップページに対応するReactコンポーネント
 * ReactElementを返す関数になっている
 */
export default () => (
-  <div>
-    <h1>Hello world!</h1>
+  <Layout title="Hello">
+    <h2>Hello world!</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus erat at tristique iaculis. Curabitur vitae erat finibus, sodales nulla vitae, consequat mauris. Fusce fermentum venenatis sem, ac maximus lacus rutrum eget. Cras fermentum mollis odio sit amet iaculis. Phasellus condimentum faucibus lorem sed rutrum. Donec pulvinar et tellus id venenatis. Nullam vel odio vitae massa condimentum ullamcorper at vitae enim. Aenean facilisis arcu nec felis tincidunt, ornare rutrum lectus tincidunt. Sed purus urna, dapibus eu auctor a, lacinia eget mauris. Donec magna diam, egestas varius facilisis vel, commodo in leo.
    </p>
-  </div>
+  </Layout>
)
```

`pages/about.js` を編集します。

```diff
import React from 'react'
+import Layout from '../components/layout'

/**
 * Aboutページに対応するReactコンポーネント
 */
export default () => (
-  <div>
-    <h1>About me</h1>
+  <Layout title="About me">
+    <h2>About me</h2>

    <p>
      Aenean rhoncus augue at maximus pharetra. Nulla bibendum justo quis nisl faucibus volutpat. Aenean ornare dolor quam, ut molestie mi condimentum in. Proin turpis sapien, scelerisque sed convallis non, efficitur in eros. Sed non neque purus. Aliquam venenatis sagittis enim. Sed massa orci, dictum ut ante vitae, posuere imperdiet dui.
    </p>
-  </div>
+  </Layout>
)
```

全ページ共通の見出しが追加されました。  
タイトルバーにタイトルが表示されていることも確認できます。

![step-3](https://cloud.githubusercontent.com/assets/1403842/23955350/fea0d5f2-09dc-11e7-9010-724ebdbfd2a0.png)

## Step 4: CSSを導入する

`components/layout.js` を編集します。  
ここでは、 Next.js の提供する css 関数を利用し、JSファイル中にスタイルを記述します。  
このような開発手法は `CSS in JS` と呼ばれています。<sup>[3](#css-in-js)</sup>

```diff
import Head from 'next/head'
+import css from 'next/css'

/**
 * 全ページ共通のレイアウト
 *
 * titleやmeta等、HTMLのhead要素にあたる情報は
 * Headコンポーネント内に書く
 */
export default (props) => (
 <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
+      <style>{`
+        body { margin: 0; }
+      `}</style>
    </Head>

-    <div>
-      <header>
+    <div className={wrapperStyle}>
+      <header className={headerStyle}>
        <h1>⚡ハロー、React⚡</h1>
      </header>
-      <div>
+      <div className={contentStyle}>
        { props.children }
      </div>
    </div>
  </div>
)
+
+const wrapperStyle = css({
+  maxWidth: 960,
+  margin: '0 auto',
+  textAlign: 'center',
+})
+
+const headerStyle = css({
+  margin: '60px 0 40px',
+  fontStyle: 'italic',
+})
+
+const contentStyle = css({
+  color: 'dimgray',
+  margin: 10,
+})
```

無事、本文のレイアウトや文字色が変更されました。  
viewportも指定してあるので、モバイル環境でもうまく表示されるはずです。

![step-4](https://cloud.githubusercontent.com/assets/1403842/23955351/fea9ad8a-09dc-11e7-8ec3-8686c11ca558.png)

## Step 5: ハンバーガーボタンを作る

[jonsuh/hamburgers](https://github.com/jonsuh/hamburgers) を利用し、アニメーションするハンバーガーボタンを追加します。

まず、 `components/hamburger.js` を作成し、以下の内容を追加します。

```diff
+import css from 'next/css'
+
+/**
+ * ハンバーガーボタンに対応するReactコンポーネント
+ */
+export default (props) => (
+  <div className={hamburgerStyle}>
+    <div className="hamburger hamburger--squeeze">
+      <div className="hamburger-box">
+        <div className="hamburger-inner"></div>
+      </div>
+    </div>
+  </div>
+)
+
+const hamburgerStyle = css({
+  position: 'fixed',
+  top: 8,
+  left: 8,
+  width: 64,
+  height: 64,
+  zIndex: 9999,
+
+  ':hover': {
+    opacity: 0.6,
+  },
+})
```

次に、 `components/layout.js` を編集します。

ここでは、さきほど作成した `<Hamburger/>` を読み込んでページ内に追加しています。  
また、外部CSSをロードするため、 `<Head>` に `<link>` を追加しました。

```diff
import Head from 'next/head'
import css from 'next/css'
+import Hamburger from './hamburger'

/**
 * 全ページ共通のレイアウト
 *
 * titleやmeta等、HTMLのhead要素にあたる情報は
 * Headコンポーネント内に書く
 */
export default (props) => (
  <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <style>{`
        body { margin: 0; }
      `}</style>
+      <link href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.7.0/hamburgers.min.css" rel="stylesheet"/>
    </Head>

    <div className={wrapperStyle}>
     <header className={headerStyle}>
       <h1>⚡ハロー、React⚡</h1>
     </header>
      <div className={contentStyle}>
        { props.children }
      </div>
+      <Hamburger/>
    </div>
  </div>
)
```

ページ左上にハンバーガーボタンが表示されました。  
現段階ではクリックしても反応しません。

![step-5](https://cloud.githubusercontent.com/assets/1403842/23955352/febd1dde-09dc-11e7-84c8-bd6dcac39afe.png)

## Step 6: ハンバーガーボタンを動かす

ハンバーガーボタンを動かすには、ボタンの on/off 状態を管理する必要があります。  
「ボタンをクリックしたら状態を切り替える」という処理も書かないといけません。

Reactコンポーネントの作り方は2種類存在します。

- 状態のないコンポーネント: ReactElementを返す関数
- 状態をあるコンポーネント: React.Componentを継承したクラス

これまでのコンポーネントでは状態を管理する必要がなかったので、1番目の方法でコンポーネントを作っていました。
今回は、on/off状態を管理するため、Hamburgerを2番目の方法に書き換えます。

`components/hamburger.js` を次の内容で編集してください。

```diff
import css from 'next/css'
+import React from 'react'

/**
 * ハンバーガーボタンに対応するReactコンポーネント
 */
-export default (props) => (
-  <div className={hamburgerStyle}>
-    <div className="hamburger hamburger--squeeze">
-      <div className="hamburger-box">
-        <div className="hamburger-inner"></div>
-      </div>
-    </div>
-  </div>
-)
+export default class Hamburger extends React.Component {
+
+  constructor () {
+    super()
+
+    // アクティブかどうかをisActiveで管理する
+    this.state = {
+      isActive: false,
+    }
+  }
+
+  /**
+   * isActiveを切り替える
+   */
+  toggle () {
+    this.setState({
+      isActive: !this.state.isActive,
+    })
+  }
+
+  render () {
+    return (
+      <div className={hamburgerStyle} onClick={() => this.toggle()}>
+        <div className={getClassName(this.state.isActive)}>
+          <div className="hamburger-box">
+            <div className="hamburger-inner"></div>
+          </div>
+        </div>
+      </div>
+    )
+  }
+
+}
+
+/**
+ * active状態を受け取ってクラス名を返す
+ */
+const getClassName = (isActive) => {
+  return (isActive ?
+    'hamburger hamburger--squeeze is-active' : // アクティブな時
+    'hamburger hamburger--squeeze'             // アクティブじゃない時
+  )
+}

const hamburgerStyle = css({
  position: 'fixed',
  top: 8,
  left: 8,
  width: 64,
  height: 64,
  zIndex: 9999,

  ':hover': {
    opacity: 0.6,
  },
})
```

Reactコンポーネントをクラスで作る場合、 `this.state` に状態を保存できます。  
`constructor()` で状態を定義し、 `this.setState()` で状態を更新して利用します。

レンダリングする内容は `render()` で定義します。
`render()` の内容は以前とほぼ同じですが、2点だけ変更してあります。

- 1個目のdiv要素の `onClick`
- 2個目のdiv要素の `className`

ボタンをクリックした時の流れは次のようになります。

1. 1個目のdiv要素のonClickにより、 `toggle()` が実行される
2. `this.state.isActive` が変更される
3. `getClassName()` により、2個目のdiv要素の `is-active` クラスが切り替わる
4. ボタンの表示が切り替わる

ハンバーガーボタンをクリックして、実際に動くかどうか確かめてみましょう。

![step-6](https://cloud.githubusercontent.com/assets/1403842/23955355/fec05684-09dc-11e7-8dc7-f26767686341.gif)

## Step 7: サイドバーを作る

サイドバーを作り、各ページへのリンクを表示します。  
`components/sidebar.js` を作成し、以下の内容を追加しましょう。

```js
import css from 'next/css'
import Link from 'next/link'

/**
 * サイドバーに対応するReactコンポーネント
 */
export default (props) => (
  <nav className={sidebarStyle}>
    <h1>Menu</h1>
    <ul className={listStyle}>
      <li><Link href="/"><a>Top</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </nav>
)

const sidebarStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 320,
  height: '100%',
  lineHeight: '42px',
  background: 'silver',
  boxShadow: '0 0 20px black',
})

const listStyle = css({
  listStyle: 'none',
  padding: 0,
  fontWeight: 'bold',
})
```

次に `components/layout.js` を編集します。

```diff
import Head from 'next/head'
import css from 'next/css'
import Hamburger from './hamburger'
+import Sidebar from './sidebar'

/**
 * 全ページ共通のレイアウト
 *
 * titleやmeta等、HTMLのhead要素にあたる情報は
 * Headコンポーネント内に書く
 */
export default (props) => (
  <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <style>{`
        body { margin: 0; }
      `}</style>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.7.0/hamburgers.min.css" rel="stylesheet"/>
    </Head>

    <div className={wrapperStyle}>
      <header className={headerStyle}>
        <h1>⚡ハロー、React⚡</h1>
      </header>
      <div className={contentStyle}>
        { props.children }
      </div>
      <Hamburger/>
+      <Sidebar/>
    </div>
  </div>
)
```

これでサイドバーが表示されました。

![step-7](https://cloud.githubusercontent.com/assets/1403842/23955354/febfb2ce-09dc-11e7-8930-f13388d15f06.png)

## Step 8: サイドバーを動かす

状態を管理するコードをHamburgerからLayoutに移動します。

まず、以下のように 'components/layout.js' を編集します。  
Layoutを関数ではなくクラスにし、HamburgerにあったコードをLayoutに移動しました。  
また、状態に応じて表示を切り替えるため、HamburgerとLayoutに `isSidebarActive` を渡しています。

```diff
+import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import Hamburger from './hamburger'
import Sidebar from './sidebar'

/**
 * 全ページ共通のレイアウト
 *
 * titleやmeta等、HTMLのhead要素にあたる情報は
 * Headコンポーネント内に書く
 */
-export default (props) => (
-  <div>
-    <Head>
-      <title>{ props.title || '⚡ハロー、React⚡' }</title>
-      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
-      <style>{`
-        body { margin: 0; }
-      `}</style>
-      <link href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.7.0/hamburgers.min.css" rel="stylesheet"/>
-    </Head>
-
-    <div className={wrapperStyle}>
-      <header className={headerStyle}>
-        <h1>⚡ハロー、React⚡</h1>
-      </header>
-      <div className={contentStyle}>
-        { props.children }
-      </div>
-      <Hamburger/>
-      <Sidebar/>
-    </div>
-  </div>
-)
+export default class Layout extends React.Component {
+
+  constructor () {
+    super()
+
+    // アクティブかどうかをisSidebarActiveで管理する
+    this.state = {
+      isSidebarActive: false,
+    }
+  }
+
+  toggle () {
+    this.setState({
+      isSidebarActive: !this.state.isSidebarActive,
+    })
+  }
+
+  render () {
+    return (
+      <div>
+        <Head>
+          <title>{ this.props.title || '⚡ハロー、React⚡' }</title>
+          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
+          <style>{`
+            body { margin: 0; }
+          `}</style>
+          <link href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.7.0/hamburgers.min.css" rel="stylesheet"/>
+        </Head>
+
+        <div className={wrapperStyle}>
+          <header className={headerStyle}>
+            <h1>⚡ハロー、React⚡</h1>
+          </header>
+          <div className={contentStyle}>
+            { this.props.children }
+          </div>
+          <Hamburger isActive={this.state.isSidebarActive} onClick={() => this.toggle()}/>
+          <Sidebar isActive={this.state.isSidebarActive}/>
+        </div>
+      </div>
+    )
+  }
+
+}  
```

次に、 Hamburgerから状態を管理するコードを削除します。  
Hamburgerは `this.props` から情報を受け取って表示するだけのコンポーネントになります。

```diff
export default class Hamburger extends React.Component {

-  constructor () {
-    super()
-
-    // アクティブかどうかをisActiveで管理する
-    this.state = {
-      isActive: false,
-    }
-  }
-
-  /**
-   * isActiveを切り替える
-   */
-  toggle () {
-    this.setState({
-      isActive: !this.state.isActive,
-    })
-  }
-
  render () {
    return (
-      <div className={hamburgerStyle} onClick={() => this.toggle()}>
+      <div className={hamburgerStyle} onClick={this.props.onClick}>
-        <div className={getClassName(this.state.isActive)}>
+        <div className={getClassName(this.props.isActive)}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    )
  }

}          
```

最後に `components/sidebar.js` を編集します。  
SidebarはLayoutから `this.props.isActive` を受け取り、表示位置を切り替えるようになります。

```diff
export default (props) => (
-  <nav className={sidebarStyle}>
+  <nav className={sidebarStyle} style={{ left: getLeft(props.isActive) }}>
    <h1>Menu</h1>
    <ul className={listStyle}>
      <li><Link href="/"><a>Top</a></Link></li>
     <li><Link href="/about"><a>About</a></Link></li>
   </ul>
  </nav>
)

+const getLeft = (isActive) => {
+  return (isActive ?
+    0 : 'calc(-100% - 20px)'
+  )
+}
+
const sidebarStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 320,
  height: '100%',
  lineHeight: '42px',
  background: 'silver',
  boxShadow: '0 0 20px black',
+
+  transition: '0.3s',
})  
```

ハンバーガーボタンに連動してサイドバーを開閉できるようになりました！

![step-8](https://cloud.githubusercontent.com/assets/1403842/23955353/febed93a-09dc-11e7-8088-1b26b98383e5.gif)

これにてハンズオンは終了です。
お疲れ様でした！！！

## 脚注

<a name="hmr">1</a>:  
Hot Module Reloading (HMR), あるいは単にホットリローディグと呼ばれる機能。  
Next.jsの内部で利用しているWebpackにより提供されている。  
livereloadやbrowserSyncのリロードと異なり、ページ全体ではなく変更したコンポーネントだけをリロードする。  
http://developer.hatenastaff.com/entry/2016/04/14/150000#Hot-Module-Reloadingの仕組み

<a name="ssr">2</a>:  
Server-Side Rendering (SSR), あるいは単に Server Rendering と呼ばれる手法。  
サーバーでReactコンポーネントをレンダリングすることで、SPAの諸問題を解決する。  
http://qiita.com/koba04/items/a62a30c6934466ea8dea

<a name="css-in-js">3</a>:  
CSS in JS。  
CSSの諸問題を解決し、コンポーネント指向を推し進めるための開発手法。  
http://postd.cc/modular-css-with-react/
