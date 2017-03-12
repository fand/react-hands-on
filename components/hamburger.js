import css from 'next/css'
import React from 'react'

export default class hamburger extends React.Component {

  render () {
    return (
      <div className={hamburgerStyle} onClick={this.props.onClick}>
        <div className={getClassName(this.props.isActive)}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    );
  }

}

const getClassName = (isActive) => {
  let className = 'hamburger hamburger--squeeze'

  if (isActive) {
    className += ' is-active'
  }

  return className
}

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
