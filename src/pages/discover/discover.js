/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-24 00:04:38
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-10-28 20:06:55
 * @FilePath: /react-music/src/pages/discover/discover.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Slide from '@/base/slide/silde'
import Loading from '@/base/loading/loading'
import Scroll from '@/base/scroll/scroll'
import ColumnList from '@/base/columnList/columnList'

import { getBanner, getPersonalized } from '@/api'
import { HTTP_OK } from '@/config'
import { formatPlayListMin } from '@/model/playlist'

import './discover.scss'

// 推荐页面

class Discover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [], // banner数组
      getDate: new Date().getDate(),// 当前日期
      personalized: [] // 推荐歌单
    }
  }

  componentDidMount() {
    // alert(window.navigator.userAgent)
    getBanner().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          banners: res.data.banners
        })
      }
    })
    getPersonalized().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          personalized: formatPlayListMin(res.data.result)
        })
      }
    })
  }

  render() {
    const { banners, personalized } = this.state
    return (
      <div className="discover mm-wrapper">
        {personalized.length > 0 && banners.length > 0 ? (
          <Scroll className="Recommend" options={{ bounce: false }}>
            {this.state.banners && (
              <div className="banner">
                <Slide ref="slide" data={this.state.banners} />
              </div>
            )}
            {/* <div className="menu">
              <div className="menu-item">
              <div className="menu-icon fm"/>
              <p>私人FM</p>
              </div>
              <div className="menu-item">
              <div className="menu-icon daily" data-date={this.state.getDate}/>
              <p>每日推荐</p>
              </div>
              <Link className="menu-item" to="/sheetlist">
                <div className="menu-icon playlist" />
                <p>歌单</p>
              </Link>
              <Link className="menu-item" to="/toplist">
                <div className="menu-icon rank" />
                <p>排行榜</p>
              </Link>
            </div> */}
            <div className="lcrlist">
              <h3
                className="lcrlist-hd"
                onClick={() => {
                  this.props.history.push('/sheetlist')
                }}
              >
                <span>大型扬声器专栏(硬件相关)</span>
              </h3>
              <ColumnList
                isNoWrapper
                list={personalized.slice(0, 4)}
                onItemClick={id => this.props.history.push(`/artDetail/${id}`)}
              />
            </div>
            <div className="lcrlist">
              <h3
                className="lcrlist-hd"
                onClick={() => {
                  this.props.history.push('/sheetlist')
                }}
              >
                <span>音乐是条河专栏(音乐知识相关)</span>
              </h3>
              <ColumnList
                isNoWrapper
                list={personalized.slice(0, 3)}
                onItemClick={id => this.props.history.push(`/artDetail/${id}`)}
              />
            </div>
            <div className="lcrlist">
              <h3
                className="lcrlist-hd"
                onClick={() => {
                  this.props.history.push('/sheetlist')
                }}
              >
                <span>推荐专辑</span>
              </h3>
              <ColumnList
                list={personalized}
                onItemClick={id => this.props.history.push(`/playlist/${id}`)}
              />
            </div>
          </Scroll>
        ) : (
          <Loading />
        )}
      </div>
    )
  }
}

export default Discover
