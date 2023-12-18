import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';
import { Horizontal, Share } from '@nutui/icons-react';
import ArtCardItem from '../../base/artCardItem';
import Style from './index.module.scss'

const App = () => {
  const [list, setsourceData] = useState([1, 2, 3, 4, 5]);
  const [order, setOrder] = useState(true);

  const itemRender = (data, dataIndex) => {
    return <ArtCardItem url={'123'}
      coverImgUrl={'https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2013/2/7/1360228131548_589.jpg'}
      title={'Bach的键盘音乐作品'}
      intro={'从习惯上，人们经常把巴洛克及之前的西方音乐称为早期音乐，包含古代音乐（古希腊和古罗马）、中世纪音乐、文艺复兴时期的音乐、巴洛克音乐，共四个时期 作者：音乐精灵官方 https://www.bilibili.com/read/cv27120646/?spm_id_from=333.999.0.0 出处：bilibili'}></ArtCardItem>
  }

  const handleOrder = () => {
    setOrder(!order)
  }

  return (
    <div className={Style.listWrapper}>
      <div className={Style.titleWrapper}>
        <div className={Style.title}>大型扬声器专栏</div>
        <Share />
      </div>
      <div className={Style.content}>
        <div className={Style.orderWrapper}>
          <Horizontal onClick={handleOrder}></Horizontal>
          {order ? '正序' : '倒序 '}
        </div>
        <VirtualList
          itemHeight={660}
          list={list}
          itemRender={itemRender}
        />

      </div>
    </div>
  )
}
export default App;