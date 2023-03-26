import { Card, CardHeader, useTheme, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { totalRehabApi } from '../../../total-rehab-api';
import { DashboardCountByDayLineChart } from './DashboardCountByDayLineChart';

Chart.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

export const Dashboard = () => {
  const { spacing } = useTheme();
  const { data } = useQuery(['analytics'], () => totalRehabApi.getAnalytics());

  console.log(data);

  return (
    <Card sx={{ marginTop: spacing(2), marginBottom: spacing(8) }}>
      <CardHeader title="Total Rehab Dashboard" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}>
        <DashboardCountByDayLineChart
          title="New users by day"
          label="New users"
          analyticsCountByDay={data?.newUsersByDay}
        />
        <DashboardCountByDayLineChart
          title="Active users by day"
          label="Active users"
          analyticsCountByDay={data?.activeUsersByDay}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}>
        <DashboardCountByDayLineChart
          title="Programs started by day"
          label="Programs started"
          analyticsCountByDay={data?.programsStartedByDay}
        />
        <DashboardCountByDayLineChart
          title="Completed tasks by day"
          label="Completed tasks"
          analyticsCountByDay={data?.completedTasksByDay}
        />
      </Box>
    </Card>
  );
};
