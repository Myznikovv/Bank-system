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
import React, { useState } from 'react';

export default function IncidentCard() {
  const incidentExample = {
    firstPriority: 'Высокий',
    param: 'authorization_problem_access',
    errors: 290,
    creationDate: '27.03.2024',
    decisionTargetDate: '01.04.2024',
    admin: 'Сиборомин А.В.',
    service: 'Service name',
    connectedIncidents: [],
    secondPriority: '',
  };

  const [secondPriority, setSecondPriority] = useState<string>(incidentExample.secondPriority)

  const assignSecondPriority = (priority: string) => {
    setSecondPriority(priority)
    incidentExample.secondPriority = priority
  }

  return (
    <Box p={5}>
      <Typography variant="h3" align="center" mb={5}>
        Инцидент "Пример"
      </Typography>

      <Stack spacing={1} divider={<Divider />}>
        <Typography variant="h5">Первый приоритет: {incidentExample.firstPriority}</Typography>
        <Typography variant="h5">
          Параметр, по которому создан инцидент: {incidentExample.param}
        </Typography>
        <Typography variant="h5">
          Количество ошибок по инциденту: {incidentExample.errors}
        </Typography>
        <Typography variant="h5">Дата создания: {incidentExample.creationDate}</Typography>
        <Typography variant="h5">
          Контрольная дата решения: {incidentExample.decisionTargetDate}
        </Typography>
        <Typography variant="h5">Администратор: {incidentExample.admin}</Typography>
        <Typography variant="h5">Сервис: {incidentExample.service}</Typography>
        <Typography variant="h5">
          Связанные инциденты: {incidentExample.connectedIncidents}
        </Typography>
        <Typography variant="h5">
          Второй приоритет:{' '}
          {secondPriority ? secondPriority : 'не определен'}
        </Typography>
        {!secondPriority && <Card sx={{ width: '300px' }}>
          <CardContent>
            <Typography variant="h5">Решение:</Typography>
            <Typography>Инцидент связанный/корневой?</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={() => assignSecondPriority('Связанный')}>Связанный</Button>
            <Button variant="contained" onClick={() => assignSecondPriority('Корневой')}>Корневой</Button>
          </CardActions>
        </Card>}
        
      </Stack>
    </Box>
  );
}
