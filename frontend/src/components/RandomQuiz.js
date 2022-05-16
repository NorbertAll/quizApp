import { useParams } from "react-router-dom"
import Header from './framework/Header'
import Footer from './framework/Footer'
import React, {useState, useEffect} from 'react'
import ConnectApi from '../api/ConnectApi'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  Alert, AlertTitle, Checkbox, FormControlLabel, Link } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { areArraysEqual } from "@mui/base"
export const RandomQuiz = ()=>{
    const { topic } =useParams();
    const API_URL = "http://127.0.0.1:8000/quiz/r/"+topic+'/';
    const[dataState]=ConnectApi(API_URL);
    const a =dataState.data.flatMap((q)=>q.answer);
   
    const ac=a.length
    const [answer, setAnswer]=useState({});
    const [answerCheck, setAnswerCheck]=useState({});

    useEffect(()=>{
        if(Object.keys(answer).length===0){
            setAnswer(createInitialAnswer());
        }
    },[answer])
    

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


    const checkAnswer = (e) => {

        e.preventDefault();
        let n=a.map((obj)=>obj.is_right);
        let y ={...n};
        let o= Object.values(y);
        let p= Object.values(answer);

        function arrayEquals(o, p){
            return(Array.isArray(o)&& Array.isArray(p)&&o.length === p.length&& o.every((val, index)=> val===p[index]))
        };
        if(arrayEquals(o,p)){
            setAnswerCheck(true);
        }else{
            setAnswerCheck(false);
        }
        
    }

    function refreshPage(){
        window.location.reload(false);
    }


    function Result(){
        if(answerCheck ===true){
            return(
                <Alert severity="success">
                    <AlertTitle>Current Answer</AlertTitle>
                    Dobra Odpowiedź
                    <Link href="#" variant="body2" onClick={refreshPage}>
                        {"Następne pytanie"}
                    </Link>
                </Alert>
            );
        }
        else if(answerCheck ===false){
            return(<Alert severity="error">
                <AlertTitle>Zła Odpowiedź</AlertTitle>
                Spróbuj jeszcze raz
            </Alert>);
        }
        else{
            return <React.Fragment></React.Fragment>;
        }
    }
    return(
        <React.Fragment>
            <Header/>
            <Container component="main" maxWidth="xs" >
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
                            <Button type="submit" variant="contained" endIcon={<SendIcon />} onClick={checkAnswer} >
                                Submit Answer
                            </Button>
                            <Result/>
                        </div>
                    ))}
                </div>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default RandomQuiz