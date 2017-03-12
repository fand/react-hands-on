import { css } from 'glamor'
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
