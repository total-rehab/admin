import { Card, CardContent, CardHeader, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { ApiComponents } from '@jambff/oac';
import { format, isSameDay } from 'date-fns';

type DashboardCountByDayLineChartProps = {
  title: string;
  label: string;
  analyticsCountByDay?: ApiComponents['AnalyticsCountByDay'][];
};

const getDates = (startDate: Date, endDate: Date) => {
  const dateArray = [];
  const currentDate = startDate;

  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
};

export const DashboardCountByDayLineChart = ({
  title,
  label,
  analyticsCountByDay,
}: DashboardCountByDayLineChartProps) => {
  const { spacing, palette } = useTheme();

  if (!analyticsCountByDay) {
    return null;
  }

  const allDates = analyticsCountByDay.map(({ day }) =>
    new Date(day).getTime(),
  );

  const minDate = new Date(Math.min.apply(null, allDates));
  const maxDate = new Date(Math.max.apply(null, allDates));
  const dates = getDates(minDate, maxDate);

  return (
    <Card
      sx={{
        marginTop: spacing(2),
        padding: spacing(2),
        margin: spacing(2),
        flex: 1,
      }}>
      <CardHeader subheader={title} />
      <CardContent>
        <Line
          height={300}
          datasetIdKey="id"
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: {
                  maxRotation: 90,
                  minRotation: 90,
                },
              },
            },
          }}
          data={{
            labels: dates.map((date) => format(date, 'dd MMM')),
            datasets: [
              {
                label,
                borderColor: palette.primary.main,
                backgroundColor: palette.primary.main,
                data: dates.map(
                  (date) =>
                    analyticsCountByDay.find((item) =>
                      isSameDay(new Date(item.day), date),
                    )?.count ?? 0,
                ),
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};
