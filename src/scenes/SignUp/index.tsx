import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";

interface IProps extends RouteComponentProps {}

const SignUp = (props: IProps) => {
  return (
    <div>SignUp form</div>
  );
}

export default observer(SignUp);
