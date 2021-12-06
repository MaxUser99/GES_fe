import { Login } from "@mui/icons-material";
import { Button, Link, Paper, Typography } from "@mui/material";
import { navigate, Link as RouterLink } from "@reach/router";
import { useContext } from 'react';
import { StoreContext } from '../stores';

interface IProps {
  title?: string;
  hideProfile?: boolean;
}

export const Header = ({ title, hideProfile }: IProps) => {
  const { userStore: { isLoggedIn } } = useContext(StoreContext);

  const goToLogin = () => navigate('/login');

  return (
    <Paper
      variant='outlined'
      sx={{
        width: '100%',
        minHeight: 70,
        display: 'flex',
        alignItems: 'center',
        padding: '0.85rem 1rem',
        borderRadius: 0
      }}>
      <Link component={RouterLink} to='/' underline='none'>
        {title || 'GES'}
      </Link>
      {
        !hideProfile && !isLoggedIn &&
        <Button
          onClick={goToLogin}
          variant='contained'
          sx={{ marginLeft: 'auto' }}>
          Login<Login fontSize='small' />
        </Button>
      }
      {
        isLoggedIn && <Typography sx={{ marginLeft: 'auto'}}>Юзер успішно авторизований</Typography>
      }
    </Paper>
  );
}
