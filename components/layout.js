import { css } from 'glamor'
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
      <style jsx global>{`
        body { margin: 0; }
      `}</style>
    </Head>

    <div className={wrapperStyle}>
      <header className={headerStyle}>
        <h1>⚡ハロー、React⚡</h1>
      </header>
      <div className={contentStyle}>
        { props.children }
      </div>
    </div>
  </div>
)

const wrapperStyle = css({
  maxWidth: 960,
  margin: '0 auto',
  textAlign: 'center',
})

const headerStyle = css({
  margin: '60px 0 40px',
  fontStyle: 'italic',
})

const contentStyle = css({
  color: 'dimgray',
  margin: 10,
})
