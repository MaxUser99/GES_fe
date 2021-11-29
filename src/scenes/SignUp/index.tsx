import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { RouteComponentProps, Link as RouterLink } from "@reach/router";
import { observer } from "mobx-react";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from '../../components/Form';
import { Scene } from '../../components/Scene';

interface IFormData {
  login: string;
  password: string;
  passwordConfirmation: string;
}

interface IProps extends RouteComponentProps { }

const schema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup.string().required()
}).required();


const SignUp = (props: IProps) => {
  const { control, formState: { errors }, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormData> = data => {
    console.log(data);
  }

  return (
    <Scene hideProfile>
      <Paper
        component='main'
        elevation={10}
        sx={{ margin: '0 auto' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography className='title' sx={{ mb: 1.5 }}>
            Sign up
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

          <Controller
            control={control}
            name='passwordConfirmation'
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label='confirm password'
                type='password'
                error={!!errors.passwordConfirmation}
                sx={{ mb: 1.5 }}
              />
            )}
          />

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
