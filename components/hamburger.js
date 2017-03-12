import css from 'next/css'

export default (props) => (
  <div className={hamburgerStyle}>
    <div className="hamburger hamburger--squeeze">
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  </div>
)

const hamburgerStyle = css({
  position: 'fixed',
  top: 16,
  left: 16,
  width: 64,
  height: 64,
  zIndex: 9999,

  ':hover': {
    opacity: 0.6,
  },
})
