/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-24 00:04:38
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-11-05 00:22:28
 * @FilePath: /react-music/src/components/mm-header/mm-header.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './mm-header.scss'

// header组件

const MmHeader = props => {
  const showHeader = /music|discover|video|art|profile/.test(props.location.pathname)
  const open = function mmHeaderOpenDrawer() {
    props.onOpen(true)
  }
  const openSearch = function mmHeaderOpenDrawer() {
    props.history.push('/search')
  }
  return (
    showHeader && (
      <header className="mm-header">
        {/* <div className="mm-header-left" onClick={open} /> */}
        <div className="mm-header-title">
          {/*<NavLink className="mm-header-item music" to="/music"/>*/}
          {/* <NavLink className="mm-header-item discover" to="/discover" /> */}
          <strong className="mm-header-title-ct">33.3黑胶电台</strong>
          {/*<NavLink className="mm-header-item video" to="/video"/>*/}
        </div>
        <div className="mm-header-right" onClick={openSearch} />
      </header>
    )
  )
}

export default withRouter(MmHeader)
