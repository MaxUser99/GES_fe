import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";

interface IProps extends RouteComponentProps {}

const Plot = (props: IProps) => {
  return (<div>plot component</div>);
}

export default observer(Plot);
