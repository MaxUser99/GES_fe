import { Axios, AxiosInstance } from "axios";
import { makeAutoObservable } from "mobx";
import { GraphStore } from "./GraphStore";

export class RootStore {
  api: Axios = new Axios({ baseURL: 'http://localhost:8080' });
  graphStore: GraphStore;

  constructor() {
    makeAutoObservable(this);
    this.graphStore = new GraphStore(this);
  }
}
