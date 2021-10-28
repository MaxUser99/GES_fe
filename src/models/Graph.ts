export class Graph {
  id: string = '';
  name: string = '';
  interest: string = '';
  height: number = 0;
  childs: Graph[] = [];

  constructor(data?: Partial<Graph>) {
    Object.assign(this, data);
  }
}
