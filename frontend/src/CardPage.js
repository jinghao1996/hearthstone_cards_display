import { Card } from "@material-ui/core";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import {  useParams } from "react-router-dom";

const CardPage = () => {
    const {id} = useParams();
    const [CardInfo, setCardInfo] = useState({});
    
    useEffect(() =>{
        axios.get("http:///localhost:8081/card/" + id).then((res)=>{
            const data = res.data.Data[0];
            setCardInfo(data);
            
        });
    },[]);

    var url = "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +id +".png";
    const {id: name, cardClass, cost, rarity,text} = CardInfo || {};

    return (
        CardInfo ? (
            <div>
                <h4 >  {name} </h4>
                <h4> class: {cardClass} </h4>
                <h4> cost: {cost} </h4>
                <h4> rarity: {rarity} </h4>
                <img src = {url}/>
                <h4> text: {text} </h4>
    
            </div>
        ): <CircularProgress />



      );



}

export default CardPage;