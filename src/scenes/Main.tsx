import { observer } from 'mobx-react';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {}

const Main = (props: IProps) => (
  <main>this is main component</main>
);

export default observer(Main);
