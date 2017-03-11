import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <title>{ props.title || '⚡ハロー、React⚡' }</title>
    </Head>

    <div>
      <header>
        ⚡ハロー、React⚡
      </header>
      <div>
        { props.children }
      </div>
    </div>
  </div>
)
