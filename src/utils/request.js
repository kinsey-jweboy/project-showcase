const BASE_URL =
  'https://s-workspace-8pbvfr.us-east-1.xata.sh/db/public:main/tables';
// const BASE_URL = 'http://127.0.0.1:8787/corsproxy';
const TOKEN = 'xau_ujNw9fRy8h5ekDGChiVh9uYPO6QcccqQ2';

export const get = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'GET' });
};

export const post = (...args) => {
  const [url, config] = args;
  return request(url, { ...config, method: 'POST' });
};

export const request = (url, config) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      ...config,
      success({ data }) {
        if (data.code === 1) {
          return resolve(data.data);
        } else {
          return reject(new Error(data.msg));
        }
      },
      fail(err) {
        const { msg } = err.data;
        return reject(new Error(msg));
      },
    });
  });
};
