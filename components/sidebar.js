import css from 'next/css'
import Link from 'next/link'

export default (props) => (
  <nav className={sidebarStyle} style={{ left: getLeft(props.isActive) }}>
    <h1>Menu</h1>
    <ul className={listStyle}>
      <li><Link href="/"><a>Top</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </nav>
)

const getLeft = (isActive) => {
  if (isActive) {
    return 0
  }
  else {
    return '-100%'
  }
}

const sidebarStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 320,
  height: '100%',
  lineHeight: '42px',
  background: 'silver',
  boxShadow: '0 0 20px black',

  transition: '0.3s',
})

const listStyle = css({
  listStyle: 'none',
  padding: 0,
  fontWeight: 'bold',
})
