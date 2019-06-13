/* global chrome */
import axios from 'axios';

axios.defaults.baseURL = process.env.APIURL || 'http://localhost:8000';

/*
const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};
*/

export const setHeaders = token => new Promise((resolve, reject) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    chrome.storage.sync.set({ token }, () => {
      resolve({ success: true });
    });
  } else {
    reject(new Error('Token is invalid or missing.'));
  }
});

export const getData = resource => axios
  .get(resource)
  .catch((e) => {
    throw e;
  });

export const queryData = (resource, queries) => axios
  .get(`${resource}?${Object.entries(queries).join('&')}`)
  .catch((e) => {
    throw e;
  });

export const postData = (resource, params) => axios
  .post(resource, params)
  .catch((e) => {
    throw e;
  });

export const putData = (resource, params) => axios
  .put(resource, params)
  .catch((e) => {
    throw e;
  });

export const deleteData = (resource, params) => axios
  .delete(resource, params)
  .catch((e) => {
    throw e;
  });
