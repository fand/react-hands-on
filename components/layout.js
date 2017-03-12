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
