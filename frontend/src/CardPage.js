import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import {  useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const CardPage = () => {
    const {id} = useParams();
    const [CardInfo, setCardInfo] = useState({});
    const [currentRating, setRating] = useState(0);
    
    useEffect(() =>{
        axios.get("http:///localhost:8081/card/" + id).then((res)=>{
            const data = res.data.Data[0];
            setCardInfo(data);
            
        });
    },[]);

    console.log(CardInfo);
    var url = "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +id +".png";
    let {id: ID, name, cardClass, cost, rarity,text,rating} = CardInfo || {};
    console.log(CardInfo);
    rating = Math.ceil(rating);

    const changeRating = (point) => {
        axios.get("http:///localhost:8081/"+id + "/" + point).then((res) =>
        {
            console.log(res);
        })
    }



    return (
        CardInfo ? (
            <div>
                <Typography align="center" gutterBottom variant="h2" component="div" justifyContent="flex-end">
                    {name}
                </Typography >
                <Paper elevation={24} >
                <Grid container spacing={3} justifyContent="center">
                {/* columns={{ xs: 4, sm: 8, md: 12 }} */}

                        <Grid item >
                            {/* <Typography component="legend">Read only</Typography>
                            <Rating name="read-only" value={rating} readOnly/> */}
                        </Grid>
                        <Grid item >
                            <img src = {url} />
                        </Grid>
                        <Grid item >
                           
                            <br/>
                            <h2> class: {cardClass} </h2>
                            <br/>
                            <h3> cost: {cost} </h3>
                            <br/>
                            <h4> rarity: {rarity} </h4>
                            <br/>
                            <h5> rating: {rating}</h5>
                            <br/>
                            <h6> text: {text} </h6>
                            <Typography component="legend" gutterBottom variant="h5"  >Would you recommend this card? </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        console.log("rating is ", newValue);
                                        changeRating(newValue);
                                        rating = newValue;
                                    }}
                                />
                        </Grid>

                </Grid>
                
                </Paper>
                

               
    
            </div>
        ): <CircularProgress />



      );



}

export default CardPage;