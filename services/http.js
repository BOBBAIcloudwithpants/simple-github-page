import Axios from 'axios'

export default class HttpService {
  static instance = Axios.create({
    baseURL: 'http://localhost:3000/',
  })
  constructor() {

  }
  static get (url, param) {
    return this.instance.get(url, {
      params: param
    })
  }

  static post (url, body) {
    return this.instance.post(url, body)
  }
}