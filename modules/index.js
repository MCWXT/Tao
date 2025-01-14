import { Axios } from 'axios';
const axios = new Axios({});
export const getTemplate = async (src) => {
  const url = src + '.html';
  return axios.get(url).then((response) => response.data);
}
export const cache = {
  setItem(key, content) {
    localStorage.setItem(key, typeof content == 'string' ? content : JSON.stringify(content));
    return content;
  },
  getItem(key) {
    const content = localStorage.getItem(key);
    return content && content.indexOf('{') != -1 ? JSON.parse(content) : content;
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
}
