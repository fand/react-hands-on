import Head from 'next/head'
import css from 'next/css'
import Hamburger from './hamburger'
import Sidebar from './sidebar'

export default class Layout extends React.Component {

  constructor () {
    super()
    this.state = {
      isSidebarActive: false
    }
  }

  toggle () {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive,
    })
  }

  render () {
    return (
      <div>
        <Head>
          <title>{ this.props.title || '⚡ハロー、React⚡' }</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
            { this.props.children }
          </div>
          <Hamburger isActive={this.state.isSidebarActive} onClick={() => this.toggle()}/>
          <Sidebar isActive={this.state.isSidebarActive}/>
        </div>
      </div>
    );
  }

}

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
