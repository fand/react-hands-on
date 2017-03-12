import { css } from 'glamor'
import React from 'react'

/**
 * ハンバーガーボタンに対応するReactコンポーネント
 */
export default class Hamburger extends React.Component {

  constructor () {
    super()

    // アクティブかどうかをisActiveで管理する
    this.state = {
      isActive: false,
    }
  }

  /**
   * isActiveを切り替える
   */
  toggle () {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render () {
    return (
      <div className={hamburgerStyle} onClick={() => this.toggle()}>
        <div className={getClassName(this.state.isActive)}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    )
  }

}

/**
 * active状態を受け取ってクラス名を返す
 */
const getClassName = (isActive) => {
  return (isActive ?
    'hamburger hamburger--squeeze is-active' : // アクティブな時
    'hamburger hamburger--squeeze'             // アクティブじゃない時
  )
}

const hamburgerStyle = css({
  position: 'fixed',
  top: 8,
  left: 8,
  width: 64,
  height: 64,
  zIndex: 9999,

  ':hover': {
    opacity: 0.6,
  },
})
