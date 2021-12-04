import { Axios } from "axios";
import { makeAutoObservable } from "mobx";
import { GraphStore } from "./GraphStore";
import { UserStore } from './UserStore';

export class RootStore {
  api: Axios = new Axios({
    baseURL: 'http://localhost:8080',
    validateStatus: status => status >= 200 && status < 300, 
    transformResponse: [function (data, headers = {}) {
      const contentTypeHeader = [...Object.entries(headers)].find(([header]) => header.toLowerCase() === 'content-type');

      if (contentTypeHeader) {
        const [ _, value ] = contentTypeHeader;
        if (typeof value === 'string' && value.toLowerCase().includes('application/json')) {
          return JSON.parse(data);
        }
      }

      return data;
    }]
  });

  graphStore: GraphStore;
  userStore: UserStore;

  constructor() {
    makeAutoObservable(this);
    this.graphStore = new GraphStore(this);
    this.userStore = new UserStore(this);
  }
}
