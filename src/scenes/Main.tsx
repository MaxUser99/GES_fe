import { observer } from 'mobx-react';
import { RouteComponentProps } from '@reach/router';
import { Scene } from '../components/Scene';
import { Grid } from '@mui/material';

interface IProps extends RouteComponentProps { }

const Main = (props: IProps) => (
  <Scene>
    <Grid component='main' justifyContent='center' container>
      main page
    </Grid>
  </Scene>
);

export default observer(Main);
