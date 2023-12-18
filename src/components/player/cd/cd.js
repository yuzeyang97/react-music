/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-24 00:04:38
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-11-05 00:12:35
 * @FilePath: /react-music/src/components/player/cd/cd.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './cd.scss'

// CD组件

const Cd = props => {
  const { isPlay, image } = props
  return (
    <div className={classNames('player-cd', { pause: !isPlay })}>
      <div className="disc-box">
        <div className="disc" />
        <img src={`${image}?param=200y200`} alt="" width="100%" height="100%" />
      </div>
    </div>
  )
}

Cd.propTypes = {
  isPlay: PropTypes.bool.isRequired, // 播放状态
  image: PropTypes.string.isRequired // 当前音乐图片
}

export default Cd
