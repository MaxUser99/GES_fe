import { makeAutoObservable } from "mobx";
import { Graph } from "../models/Graph";
import { RootStore } from "./RootStore";

export class GraphStore {
  isLoading: boolean = false;
  graph?: Graph | null = null;

  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  loadGraph = async () => {
    try {
      this.isLoading = true;
      const response = await this.rootStore.api.get('/node/name/GES');
      this.graph = this.parseGraph(response.data);
      console.log('response: ', response);
      console.log('graph: ', this.graph);
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
