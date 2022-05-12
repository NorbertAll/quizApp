import { useParams } from "react-router-dom"
import Header from './framework/Header'
import Footer from './framework/Footer'
import React, {useState, useEffect} from 'react'
import ConnectApi from '../api/ConnectApi'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
import { AlertTitle, Checkbox, FormControlLabel } from '@mui/material';
import { Alert } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
export const RandomQuiz = ()=>{
    const { topic } =useParams();
    const API_URL = "http://127.0.0.1:8000/quiz/r/"+topic+'/';
    const[dataState]=ConnectApi(API_URL);
    const a =dataState.data.flatMap((q)=>q.answer);
   
    const ac=a.length
    const [answer, setAnswer]=useState({});

    const handleSelection = (e) =>{
        setAnswer({...answer, [e.target.value]:e.target.checked})
    }
    const createInitialAnswer = () => {
        let z = a.flatMap((obj) => obj.id);
        var object= {};
        for(var x = 0; x<ac; x++){
            object[z[x]]=false;
        }
        return object;
    };

    useEffect(()=>{
        if(Object.keys(answer).length===0){
            setAnswer(createInitialAnswer());
        }
    },[answer])
    console.log(answer);



    return(
        <React.Fragment>
            <Header/>
            <Container component="main" maxWidth="xs">
                <div>
                    {dataState.data.map(({title, answer}, i)=>(
                        <div key={i}>
                            <Typography component='h1' variant="h5">
                                {title}
                            </Typography>
                            {answer.map(({answer_text, id})=>(
                                <RadioGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox value={id} color="primary" onChange={handleSelection}/>
                                                
                                        }
                                        label={answer_text}
                                    />
                                </RadioGroup>
                            ))}
                            <Button type="submit" variant="contained" endIcon={<SendIcon />} >
                                Submit Answer
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default RandomQuiz