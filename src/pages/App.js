/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-24 00:04:38
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-10-28 20:21:13
 * @FilePath: /react-music/src/pages/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import Drawer from '@/base/drawer/drawer'
import Loading from '@/base/loading/loading'
import MmHeader from '@/components/mm-header/mm-header'
import Player from '@/components/player/player'
import Menu from '@/components/menu/menu'
import '@nutui/nutui-react/dist/style.css'
import TabBar from '../components/tab-bar'
import CartPage from './Shop/CartPage'

const Discover = lazy(() => import('@/pages/discover/discover'))
const Profile = lazy(() => import('@/pages/profile/index'))
const Search = lazy(() => import('@/pages/search/search'))
const TopList = lazy(() => import('@/pages/toplist/toplist'))
const PlayList = lazy(() => import('@/pages/playlist/playlist'))
const SheetList = lazy(() => import('@/pages/sheetlist/sheetlist'))
const ArtDetail = lazy(() => import('@/pages/artDetail/index'))
const ArtList= lazy(() => import('@/pages/artList/index'))
const Shop= lazy(() => import('@/pages/Shop/index'))
const ProductDetails= lazy(() => import('@/pages/Shop/ProductDetails'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawer: false
    }
  }

  openDrawer = state => {
    this.setState({
      isDrawer: state
    })
  }

  render() {
    return (
      <Router>
        <Drawer
          className="App mm-wrapper"
          sidebar={Menu}
          isDrawer={this.state.isDrawer}
          onOpen={this.openDrawer}
        >
          <MmHeader onOpen={this.openDrawer} />
          <main className="mm-wrapper">
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/discover" component={Discover} />
                <Route path="/search" component={Search} />
                <Route path="/toplist" component={TopList} />
                <Route path="/playlist/:id" component={PlayList} />
                <Route path="/sheetlist" component={SheetList} />
                <Route path="/artDetail" component={ArtDetail} />
                <Route path="/artList" component={ArtList} />
                <Route path="/profile" component={Profile} />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/cart" component={CartPage} />
                <Redirect to="/discover" />
              </Switch>
            </Suspense>
          </main>
          {this.props.showPlayer && <Player />}
          <TabBar />
        </Drawer>
      </Router>
    )
  }
}

//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  showPlayer: state.showPlayer
})

export default connect(mapStateToProps)(App)
