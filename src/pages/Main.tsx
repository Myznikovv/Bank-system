import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useSnackbar } from 'notistack';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Main() {
  const { enqueueSnackbar } = useSnackbar();
  const [notifications, setNotifications] = useState<number>(0);

  let borderStyle =
    notifications < 1 ? {} : { border: '3px solid blue', '&:hover': { border: '3px solid blue' } };

  const notify = () => {
    enqueueSnackbar(
      'Здравствуйте! По функциональной подсистеме «пример» превышено количество ошибок (250), зарегистрирован инцидент с приоритетом «Высокий», можете просмотреть его в «Список инцидентов», Приоритет: Высокий',
      { autoHideDuration: 7000, style: { backgroundColor: '#b22a00' } },
    );
  };
  setTimeout(() => setNotifications(1), 2000);
  useEffect(() => {
    setTimeout(notify, 2000);
    console.log('useEffect');
  }, []);

  return (
    <Box p={6}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <Typography variant="h4">Добро пожаловать в банковскую систему bank system!</Typography>
        <Button
          variant="outlined"
          size="large"
          startIcon={<CircleNotificationsIcon />}
          sx={borderStyle}>
          Уведомления{' '}
          {notifications >= 1 && <span className="notifications-counter">{notifications}</span>}
        </Button>
      </Box>
      <Stack direction={'column'} gap={3} pt={1}>
        <Link to="/incidents">
          <Button variant="contained" size="large">
            Просмотреть список инцидентов
          </Button>
        </Link>
        <Link to="/admins">
          <Button variant="contained" size="large">
            Просмотреть список администраторов
          </Button>
        </Link>

        <Link to="/">
          <Button variant="contained" size="large">
            Просмотреть список ТКС
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
