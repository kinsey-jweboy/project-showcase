const BASE_URL =
  'https://projectshowcase-public-etgyekefot.cn-hangzhou.fcapp.run';
// const BASE_URL = 'http://localhost:3000';

export const get = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'GET' });
};

export const post = (...args) => {
  const [url, config] = args;
  const { data } = config;
  console.log(config);
  return request(url, { ...config, method: 'POST' });
};

export const request = (url, config) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      ...config,
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
