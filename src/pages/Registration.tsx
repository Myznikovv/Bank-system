import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <Stack p={16} alignItems={'center'} spacing={4}>
      <Typography variant="h3" mb={3}>
        Регистрация
      </Typography>

      <TextField label="Ваш логин во внутренней сети банка" sx={{ width: '400px' }} />
      <TextField
        label="Ваш пароль во внутренней сети банка"
        type="password"
        sx={{ width: '400px' }}
      />
      <TextField label="Ваша должность" sx={{ width: '400px' }} />
      <TextField label="Наименование сервиса банка" sx={{ width: '400px' }} />
      <TextField label="Рабочий телефон сотрудника" sx={{ width: '400px' }} />
      <TextField label="Ответственный руководитель сервиса" sx={{ width: '400px' }} />

      <Link to="/login">
        <Button variant="contained">зарегистрироваться</Button>
      </Link>
    </Stack>
  );
}
