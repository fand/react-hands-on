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
