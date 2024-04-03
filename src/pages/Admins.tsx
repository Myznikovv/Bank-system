import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function Admins() {
  const navigate = useNavigate()

  const admins = [
    { fullName: 'Компанеев Григорий Осокин', incidents: [], contacts: [] },
    { fullName: 'Инновациев Валерий Будка', incidents: [], contacts: [] },
  ];

  return (
    <Box p={5}>
      <Button startIcon={<ArrowBackIcon />} variant='outlined' onClick={() => navigate(-1)}>Назад</Button>
      <Typography variant="h3" align="center" mb={5}>
        Список администраторов
      </Typography>

      <Stack spacing={1} divider={<Divider />}>
        {admins.map((admin, ind) => (
          <>
            <Typography variant="h4">
              {ind + 1}. {admin.fullName}
            </Typography>
            <Typography variant="h5">Инциденты: {admin.incidents}</Typography>
            <Typography variant="h5">Контакты: {admin.contacts}</Typography>
          </>
        ))}
      </Stack>
    </Box>
  );
}
