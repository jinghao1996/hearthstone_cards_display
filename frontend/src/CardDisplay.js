import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import HearthstoneCard from "./card";
import SearchBar from 'material-ui-search-bar';

const CardDisplay = () => {
    const [data, setData] = React.useState();
    useEffect(() => {
      axios.get("http:///localhost:8081/").then((res) => {
          const responseData = res.data.Data;
          setData(responseData);
      })
    },[])
    
    const requestSearch = (name) =>
    {
        axios.get("http:///localhost:8081/search/" + name).then((res) => {
          const responseData = res.data.Data;
          console.log(responseData);
          setData(responseData);
      })
    }
  
    const cancelSearch = () =>
    {
  
    }

    return (
        data ? (
          <div>
            <div>
            <SearchBar
            // value={searched}
            onRequestSearch	={(name) => requestSearch(name)}
            onCancelSearch={() => cancelSearch()}
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
                  {data.map((card) => (
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