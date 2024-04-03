import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { incidents } from '../incidents';

export default function IncidentCard() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const id = Number(location.slice(25))
  const selectedIncident: any = incidents.find(incident => incident.id === id)

  const [secondPriority, setSecondPriority] = useState<string>(selectedIncident.secondPriority);

  const assignSecondPriority = (priority: string) => {
    setSecondPriority(priority);
    selectedIncident.secondPriority = priority;
  };

  return (
    <Box p={5}>
      <Button startIcon={<ArrowBackIcon />} variant="outlined" onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Typography variant="h3" align="center" mb={5}>
        Инцидент "Пример"
      </Typography>

      <Stack spacing={1} divider={<Divider />}>
        <Typography variant="h5">Первый приоритет: {selectedIncident.firstPriority}</Typography>
        <Typography variant="h5">
          Параметр, по которому создан инцидент: {selectedIncident.param}
        </Typography>
        <Typography variant="h5">
          Количество ошибок по инциденту: {selectedIncident.errors}
        </Typography>
        <Typography variant="h5">Дата создания: {selectedIncident.creationDate}</Typography>
        <Typography variant="h5">
          Контрольная дата решения: {selectedIncident.decisionTargetDate}
        </Typography>
        <Typography variant="h5">Администратор: {selectedIncident.admin}</Typography>
        <Typography variant="h5">Сервис: {selectedIncident.service}</Typography>
        <Typography variant="h5">
          Связанные инциденты: {selectedIncident.connectedIncidents}
        </Typography>
        <Typography variant="h5">
          Второй приоритет: {secondPriority ? secondPriority : 'не определен'}
        </Typography>
        {!secondPriority && (
          <Card sx={{ width: '300px' }}>
            <CardContent>
              <Typography variant="h5">Решение:</Typography>
              <Typography>Инцидент связанный/корневой?</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => assignSecondPriority('Связанный')}>
                Связанный
              </Button>
              <Button variant="contained" onClick={() => assignSecondPriority('Корневой')}>
                Корневой
              </Button>
            </CardActions>
          </Card>
        )}
      </Stack>
    </Box>
  );
}
