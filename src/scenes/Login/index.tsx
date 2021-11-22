import { Grid, styled, TextField, Typography } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";
import { Scene } from '../../components/Scene';

interface IProps extends RouteComponentProps { }

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    marginBottom: 16
  }
}));

const Login = (props: IProps) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
  }

  return (
    <Scene hideProfile>
      <Grid
        component='main'
        justifyContent='center'
        container>
        <Form onSubmit={submitHandler}>
          <Typography className='title'>
            Please, enter your credentials
          </Typography>
          <TextField id='login' />
          <TextField id='password' type='password' />
        </Form>
      </Grid>
    </Scene>
  );
}

export default observer(Login);
