import { AppBar as RaAppBar, AppBarProps } from 'react-admin';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export const AppBar = (props: AppBarProps) => (
  <RaAppBar
    {...props}
    sx={{
      color: 'white',
    }}>
    <Typography variant="h6" color="inherit" id="react-admin-title" />
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        <Image
          priority
          src="/images/total-rehab-logo.png"
          alt="Total Rehab logo"
          width={175}
          height={25}
        />
      </div>
    </div>
  </RaAppBar>
);
