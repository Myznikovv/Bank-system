import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function IncidentList() {
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

  const [selectedIndexFirst, setSelectedIndexFirst] = useState<number>(0);
  const [selectedIndexSecond, setSelectedIndexSecond] = useState<number>(-1);

  const firstPriority = ['Низкий', 'Средний', 'Высокий', 'Критический', 'Широкомасштабный'];
  const secondPriority = ['Связанный', 'Корневой'];

  const handleListItemClickFirst = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndexFirst(index);
  };

  const handleListItemClickSecond = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndexSecond(selectedIndexSecond === index ? -1 : index);
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center', p: 3 }}>
        Список инцидентов
      </Typography>
      <Box
        gap={3}
        sx={{
          display: 'flex',
        }}>
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: 2,
            width: '300px',
            m: 3,
          }}>
          <List>
            <ListItem>
              <ListItemText>1-я классификация приоритетов</ListItemText>
            </ListItem>
            {firstPriority.map((category, ind) => (
              <ListItem>
                <ListItemButton
                  selected={selectedIndexFirst === ind}
                  onClick={(event) => handleListItemClickFirst(event, ind)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(25, 118, 210, 0.18)',
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.22)',
                      },
                    },
                  }}>
                  <ListItemText>{category}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemText>2-я классификация приоритетов</ListItemText>
            </ListItem>
            {secondPriority.map((category, ind) => (
              <ListItem>
                <ListItemButton
                  selected={selectedIndexSecond === ind}
                  onClick={(event) => handleListItemClickSecond(event, ind)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(25, 118, 210, 0.18)',
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.24)',
                      },
                    },
                  }}>
                  <ListItemText>{category}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem>
              <Button variant="contained" endIcon={<AddIcon />}>
                Создать инцидент
              </Button>
            </ListItem>
          </List>
        </Box>

        {selectedIndexFirst === 2 && (
          <Card
            sx={{
              marginTop: 3,
              width: '230px',
              height: '190px',
            }}>
            <CardContent>
              <Typography variant="h4">Пример</Typography>
              <Typography variant="body2" color="text.secondary">
                Кол-во ошибок: {incidentExample.errors}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Параметр: {incidentExample.param}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/incidents/incident_card">
                <Button>Открыть</Button>
              </Link>
            </CardActions>
          </Card>
        )}
      </Box>
    </Box>
  );
}
