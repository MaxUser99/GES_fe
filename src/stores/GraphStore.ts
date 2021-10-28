import { makeAutoObservable } from "mobx";
import { Graph } from "../models/Graph";
import { RootStore } from "./RootStore";

export class GraphStore {
  isLoading: boolean = false;
  graph?: Graph | null = null;
  graphJSON?: string = '';

  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  loadGraph = async () => {
    this.isLoading = true;
    const response = await this.rootStore.api.get('/node/name/GES');
    this.graphJSON = typeof response.data === 'string' ? response.data : '';
    console.log('response: ', response, JSON.parse(response.data as string));
    this.isLoading = false;
  }
}
