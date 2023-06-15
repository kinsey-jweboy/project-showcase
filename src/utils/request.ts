import { validURL } from './lodash';

const BASE_URL = 'https://xata.jweboy.com';
// const BASE_URL = 'http://localhost:3000';

export const get = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'GET' });
};

export const post = (...args) => {
  const [url, config] = args;
  const { data } = config;
  return request(url, { ...config, method: 'POST' });
};

export const request = (url, config) => {
  const isValidURL = validURL(url);

  return new Promise((resolve, reject) => {
    uni.request({
      url: !isValidURL ? BASE_URL + url : url,
      ...config,
      header: {
        Authorization: 'Bearer xau_4bDvCoNegYD4DeuW8qOXKyZsBsiuQb3o2',
        'Content-Type': 'application/json',
      },
      success({ data }) {
        if (data.code === 1) {
          return resolve(data.data);
        } else {
          return reject(new Error(data.msg));
        }
      },
      fail(err) {
        // console.error(err);
        // const { msg } = err.data;
        // return reject(new Error(msg));
      },
    });
  });
};
