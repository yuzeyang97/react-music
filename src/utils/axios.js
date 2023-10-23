/*
 * @Author: yuzeyang yuzeyang@xiaoniangao.com
 * @Date: 2023-10-24 00:04:38
 * @LastEditors: yuzeyang yuzeyang@xiaoniangao.com
 * @LastEditTime: 2023-10-24 01:50:41
 * @FilePath: /react-music/src/utils/axios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL
})

request.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    }
  },
  error => Promise.reject(error)
)

export default request
