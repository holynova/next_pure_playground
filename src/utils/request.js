import axios from 'axios'
import { resolve } from 'path';
import { reject } from 'any-promise';

export function getCommonHeaders() {
  let headers = {
    Timestamp: new Date().getTime(),
    Language: 'zh-cn',
    Country: 'CN',
    'Client-Id': 803,
    'Client-Version': '2.0.0',
  };
  return headers
}

export function initAxio() {
  axios.defaults.headers.common = getCommonHeaders();
}

export function ajax(config) {
  initAxio()
  // const p = new Promise((resolve, reject) => {
  //   axios(config)
  // })
  return axios(config)
  // return p
}

export function ajaxAsync(config) {
  initAxio()
  return axios(config)
    .then(res => [null, res])
    .catch(err => [err, null])
}

export default {
  getCommonHeaders,
}