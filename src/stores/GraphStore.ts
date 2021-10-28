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
    try {
      this.isLoading = true;
      const response = await this.rootStore.api.get('/node/name/GES');
      this.graphJSON = typeof response.data === 'string' ? response.data : '';
      const parsed = JSON.parse(this.graphJSON);
      this.graph = this.parseGraph(parsed);
      console.log('response: ', response, JSON.parse(response.data as string));
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }

  parseGraph(rawGraph: any): Graph {
    const { id, name, interest, height, childs } = rawGraph;
    const graph = new Graph({ id, name, interest, height });
    graph.childs = Array.isArray(childs)
    ? childs.map(child => this.parseGraph(child))
    : [];
    return graph;
  }
}
