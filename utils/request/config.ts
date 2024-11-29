import * as axios from 'axios';
import qs from 'qs';

export interface RequestConfig extends axios.AxiosRequestConfig {
  contentType?: 'json' | 'form' | 'file';
}

export const config: RequestConfig = {
  baseURL: 'https://jweboy-api.pawio.cn',
  // baseURL: 'http://localhost:4000',
  responseType: 'json',
  timeout: 15000, // 15s超时
  withCredentials: false, // 是否允许携带cookie
  transformRequest: [
    function transformRequest(data, headers) {
      if (headers) {
        if (headers['Content-Type'] === 'application/json') {
          return JSON.stringify(data);
        }
        if (headers['Content-Type'] === 'multipart/form-data') {
          return data;
        }
      }
      return qs.stringify(data);
    },
  ],
};

export const getContentType = (type?: RequestConfig['contentType']) => {
  switch (type) {
    case 'json':
      return 'application/json';
    case 'form':
      return 'application/x-www-form-urlencoded';
    case 'file':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};
