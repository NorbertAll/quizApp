import React from 'react'
import Header from './framework/Header'
import Footer from './framework/Footer'
import ConnectApi from '../api/ConnectApi'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

export const QuizSelect=()=> {
    const API_URL = "http://127.0.0.1:8000/quiz/";
    const[dataState]=ConnectApi(API_URL);
    console.log(dataState);
  return (
    <React.Fragment>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    <Header />
    <Container maxWidth="sm" component="main"  >
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
        color="textSecondary"
        component="p"
      >
        We've got all the quizzes you love to binge! The world's largest
        selection of quizzes. Choose from 1+ quizzes with new additions
        published every month
      </Typography>
    </Container>
    <Container maxWidth="md" component="main" >
      <Grid container spacing={5} alignItems="flex-end">
        {dataState.data.map((q) => (
          <Grid item key={q.title} xs={12} md={4}>
            <Card>
              <CardHeader
                title={q.title}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                sx={{
                    backgroundcolor: grey
                }}
              />
              <CardContent>
                <div  sx={{
                        backgroundColor:
                        grey
                    }}>
                  <Typography component="h2" variant="h6" color="textPrimary">
                    Random Quiz
                  </Typography>
                </div>
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
                  href="http://localhost:3000/r/django"
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