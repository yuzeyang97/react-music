/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-28 18:49:21
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-10-28 20:32:29
 * @FilePath: /react-music/src/components/tab-bar/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Tabbar } from '@nutui/nutui-react';
import { Order, Home, My } from '@nutui/icons-react';
import { useHistory } from 'react-router-dom'

const routerPath = ['/discover', '/artList', '/profile']

export default (props) => {
  const history = useHistory()
  const path = history.location.pathname

  const defaultValue = routerPath.findIndex((item) => item === path)
  console.log(path, 666666);
  return (<Tabbar onSwitch={(value) => { console.log(history.push(routerPath[value])) }} defaultValue={defaultValue}>
    <Tabbar.Item title="首页" icon={<Home width={18} height={18} />} />
    <Tabbar.Item title="文章" icon={<Order width={18} height={18} />} />
    <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
  </Tabbar>)
}