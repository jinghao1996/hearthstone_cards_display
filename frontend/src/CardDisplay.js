import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import HearthstoneCard from "./card";
import SearchBar from 'material-ui-search-bar';
import { Autocomplete } from "@mui/material";

import TextField from '@mui/material/TextField';
import { set, ref, onValue, startAt, update,query,limitToFirst,orderByKey } from "firebase/database";
import {db} from './util/firebase';
import { cardClasses } from "@mui/material";
const card_index = require("./util/cards_index.json")




const CardDisplay = () => {
    const [data, setData] = React.useState();
    useEffect(() => {
      // axios.get("http:///localhost:8081/").then((res) => {
      //     const responseData = res.data.Data;
      //     setData(responseData);
      // })
      // const cardRef  = db.child()
      // const cardRef = firebase.database().ref("cards");
      const item = card_index[Math.floor(Math.random() * (card_index.length - 12))];
      const cardRef = query(ref(db,"cards"),orderByKey(),startAt(item["id"]),limitToFirst(12))
      onValue(cardRef,snapshot =>{
        setData (snapshot.val());
        
      })
      
    },[])
    
    const requestSearch = (name) =>
    {
      //   axios.get("http:///localhost:8081/search/" + name).then((res) => {
      //     const responseData = res.data.Data;
      //     console.log(responseData);
      //     setData(responseData);
      // })
      const searchRef = ref(db,"cards/" + name);
      onValue(searchRef,snapshot =>{
          setData ({name:snapshot.val()});

      })
    }



    return (
        data ? (

          <div>
            
            <div>
            <Autocomplete
            options={card_index}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="cards" />}
            onChange={(event, newValue) => {
              if (newValue != null)
              {
                requestSearch(newValue["id"]);
              }
              else{
                const cardRef = query(ref(db,"cards"),limitToFirst(12))
                onValue(cardRef,snapshot =>{
                  setData (snapshot.val());
                  
                })
              }
              
              
            }}
            // inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              
            }}
            />

            </div>
            <br/>
            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>xs=2</Item>
                </Grid>
              ))}
            </Grid> */}

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.values(data).map((card) => (
                    <div>
                      
                    <HearthstoneCard key={card.id} todo={card} />
                    <br/>
                    </div>
                  ))}
            </div>
            
          </div>
          ): <CircularProgress />

      );
}

export default CardDisplay;