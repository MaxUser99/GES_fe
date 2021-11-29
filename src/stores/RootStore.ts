import { Axios, AxiosInstance } from "axios";
import { makeAutoObservable } from "mobx";
import { GraphStore } from "./GraphStore";
import { UserStore } from './UserStore';

export class RootStore {
  api: Axios = new Axios({ baseURL: 'http://localhost:8080', responseType: 'json'});
  graphStore: GraphStore;
  userStore: UserStore;

  constructor() {
    makeAutoObservable(this);
    this.graphStore = new GraphStore(this);
    this.userStore = new UserStore(this);
    this.api.interceptors.request.use((e) => {
      console.log(e)
      return e;
    })
  }
}
