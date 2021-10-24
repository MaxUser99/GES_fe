import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";

interface IProps extends RouteComponentProps {}

const Login = (props: IProps) => {
  return (
    <div>login form</div>
  );
}

export default observer(Login);
