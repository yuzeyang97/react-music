import React from 'react'
import PropTypes from 'prop-types'

import { formatPlayCount } from '@/utils/utils'

import './columnList.scss'

// 歌曲基础列表组件——列

const ColumnList = props => {
  const { list, onItemClick, isNoWrapper } = props
  return (
    <div className="column-wrapper" style={{
      flexWrap: isNoWrapper ? 'nowrap' : 'wrap',
      overflow: 'scroll'
    }}>
      {list.length > 0 &&
        list.map(item => {
          return (
            <div
              className="column-item"
              onClick={() => onItemClick(item.id)}
              key={item.id}
            >
              <div
                className="column-img"
                data-play={formatPlayCount(item.playCount)}
              >
                <img
                  width="100%"
                  height="100%"
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
              </div>
              <p className="column-title">{item.name.replace(/\s/g, ' ')}</p>
            </div>
          )
        })}
    </div>
  )
}

ColumnList.propTypes = {
  list: PropTypes.any.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ColumnList
