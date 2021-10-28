import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../stores";

interface IProps extends RouteComponentProps { }

const Plot = (props: IProps) => {
  const { graphStore: { isLoading, graph, loadGraph } } = useContext(StoreContext);
  console.log('graph: ', graph, isLoading);
  useEffect(() => {
    loadGraph();
  }, []);
  return (<div>plot component</div>);
}

export default observer(Plot);
