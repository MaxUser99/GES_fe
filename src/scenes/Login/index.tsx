import { useContext } from 'react';
import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { RouteComponentProps, Link as RouterLink } from "@reach/router";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { observer } from "mobx-react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StoreContext } from '../../stores';
import { Form } from '../../components/Form';
import { Scene } from '../../components/Scene';

interface IFormData {
  login: string;
  password: string;
}

interface IProps extends RouteComponentProps { }

const schema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
}).required();


const Login = (props: IProps) => {
  const { userStore: { login } } = useContext(StoreContext);

  const { control, formState: { errors }, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const isLoggedIn = await login(data.login, data.password);
    console.log({ isLoggedIn });
  }

  return (
    <Scene hideProfile>
      <Paper
        component='main'
        elevation={10}
        sx={{ margin: '0 auto' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography className='title' sx={{ mb: 1.5 }}>
            Please, enter your credentials
          </Typography>

          <Controller
            control={control}
            name='login'
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
              {...field}
              label='login'
              error={!!errors.login}
              sx={{ mb: 1.5 }} />
            )}
          />

          <Controller
            control={control}
            name='password'
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label='password'
                type='password'
                error={!!errors.password}
                sx={{ mb: 1.5 }}
              />
            )}
          />

          <Button type='submit' variant='contained' sx={{ mb: 1.5 }} fullWidth>Login</Button>
          <Link component={RouterLink} to='/signup'>
            Sign up
          </Link>
        </Form>
      </Paper>
    </Scene>
  );
}

export default observer(Login);
