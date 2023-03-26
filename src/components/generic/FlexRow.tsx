import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';

type FlexRowProps = {
  children: ReactNode;
};

export const FlexRow: FC<FlexRowProps> = ({ children }: FlexRowProps) => {
  const { spacing } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        width: '100%',
        gap: spacing(4),
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
      }}>
      {children}
    </Box>
  );
};
