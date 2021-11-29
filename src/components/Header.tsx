import { Login } from "@mui/icons-material";
import { Button, Link, Paper, Typography } from "@mui/material";
import { navigate, Link as RouterLink } from "@reach/router";

interface IProps {
  title?: string;
  hideProfile?: boolean;
}

export const Header = ({ title, hideProfile }: IProps) => {
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
        !hideProfile &&
        <Button
          onClick={goToLogin}
          variant='contained'
          sx={{ marginLeft: 'auto' }}>
          Login<Login fontSize='small' />
        </Button>
      }
    </Paper>
  );
}
