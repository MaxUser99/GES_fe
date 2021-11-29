import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { RouteComponentProps, Link as RouterLink } from "@reach/router";
import { observer } from "mobx-react";
import { Form } from '../../components/Form';
import { Scene } from '../../components/Scene';

interface IProps extends RouteComponentProps {}

const SignUp = (props: IProps) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
  }

  return (
    <Scene hideProfile>
      <Paper
        component='main'
        elevation={10}
        sx={{ margin: '0 auto' }}>
        <Form onSubmit={submitHandler}>
          <Typography className='title' sx={{ mb: 1.5 }}>
            Sign up
          </Typography>
          <TextField label='login' id='login' sx={{ mb: 1.5 }} />
          <TextField label='password' id='password' type='password' sx={{ mb: 1.5 }} />
          <TextField label='confirm password' id='password-confirm' type='password' sx={{ mb: 1.5 }} />
          <Button type='submit' variant='contained' sx={{ mb: 1.5 }} fullWidth>Create account</Button>
          <Link component={RouterLink} to='/login'>
            Login in
          </Link>
        </Form>
      </Paper>
    </Scene>
  );
}

export default observer(SignUp);
