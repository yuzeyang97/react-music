import React from 'react'
import { formatPlayCount } from '@/utils/utils'
import { useHistory } from 'react-router-dom'
import Style from './index.module.scss'

// 歌曲基础列表组件——列

const ArtCardItem = item => {
  const { url, coverImgUrl, title, intro } = item;
  const history = useHistory()

  return <div
    className={Style.cardItem}
    onClick={() => history.push(`/artDetail/${url}`)}
    key={item.id}
  >
    <div className={Style.titleWrapper}>
      <div className={Style.title}>{title}</div>
      <div className={Style.intro}>
        {intro}
      </div>
    </div>
    <img
      width="100%"
      height="100%"
      src={`${coverImgUrl}?param=200y200`}
      className={Style.img}
      alt=""
    />
  </div>
}

export default ArtCardItem
