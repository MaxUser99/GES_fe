import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Header } from './Header';


interface IProps {
  title?: string;
  hideProfile?: boolean;
  children?: ReactNode | ReactNode[];
}

export const Scene = ({ title, hideProfile, children }: IProps) => {
  return (
    <Grid sx={{ height: '100vh' }} alignItems='flex-start' container>
      <Header title={title} hideProfile={hideProfile} />
      {children}
    </Grid>
  );
}
