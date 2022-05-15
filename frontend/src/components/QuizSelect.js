import React from 'react'
import Header from './framework/Header'
import Footer from './framework/Footer'
import ConnectApi from '../api/ConnectApi'


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

export const QuizSelect=()=> {
    const API_URL = "http://127.0.0.1:8000/quiz/";
    const[dataState]=ConnectApi(API_URL);

  return (
   

    <React.Fragment>
      <Header />
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Quizzes
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        We've got all the quizzes you love to binge! The world's largest
        selection of quizzes. Choose from 1+ quizzes with new additions
        published every month
      </Typography>
    </Container>
    <Container maxWidth="md" component="main" >

      <Grid container spacing={5} alignItems="flex-end">
      
        {
          
        dataState.data.map((q) => (
          <Grid item key={q.title} xs={12}
          sm={q.title === 'Enterprise' ? 12 : 6}
          md={4}>
            <Card>
              <CardHeader
                title={q.title}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}>
                  <Typography component="h2" variant="h6" color="text.primary">
                    Random Quiz
                  </Typography>
                </Box>
                <ul>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        marginBottom: 2
                      }}
                  >
                    50 questions
                  </Typography>
                </ul>
                
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  href={"http://localhost:3000/r/"+q.title+"/"}
                >
                  Start Quiz
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer />
  </React.Fragment>

  )
}

export default QuizSelect