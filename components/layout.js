import Head from 'next/head'
import css from 'next/css'
import Hamburger from './hamburger'

export default (props) => (
  <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
      <style>{`
        body { margin: 0; }
      `}</style>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.7.0/hamburgers.min.css" rel="stylesheet"/>
    </Head>

    <div className={wrapperStyle}>
      <header className={headerStyle}>
        ⚡ハロー、React⚡
      </header>
      <div className={contentStyle}>
        { props.children }
      </div>
      <Hamburger/>
    </div>
  </div>
)

const wrapperStyle = css({
  width: 960,
  margin: '0 auto',
  textAlign: 'center',
})

const headerStyle = css({
  margin: '40px 0',
  fontSize: '2.5em',
  fontWeight: 'bold',
  fontStyle: 'italic',
})

const contentStyle = css({
  color: 'dimgray',
})
