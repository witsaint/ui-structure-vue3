import axios from 'axios';

export default (url, params = {}, loading = {}, method = 'get', options = {}) => {
  // eslint-disable-next-line no-param-reassign
  loading.value = true;
  return axios(url, Object.assign(options, { method, params })).then((res) => {
    // eslint-disable-next-line no-param-reassign
    loading.value = false;
    return res;
  });
};
