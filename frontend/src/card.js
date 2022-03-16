import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const HearthstoneCard = (props) => {
  const { todo } = props;
  const { cardClass, cost, name, rarity, text,id} = todo;
  let history = useNavigate();
  let url = "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +id +".png";

  // let url = "https://art.hearthstonejson.com/v1/256x/" + id + ".jpg";

  return (
    
    // <div
    //   style={{
    //     backgroundColor: "grey",
    //     margin: "20px",
    //     padding: "15px",
    //     width: "400px"
    //   }}

    <Card sx={{ minWidth: 300,maxWidth:300,  margin:"40px"}}
      onClick={() => history(`/card/${id}`)}
    >
        <CardMedia
        component="img"
        height="400"
        width="400"
        image= {url}
        alt = {name}
        
      />
        <CardContent >
        <Typography align="center" gutterBottom variant="h5" component="div">
          {name}
        </Typography >
        {/* <Typography variant="body2" color="text.secondary">
          {text}  
        </Typography> */}
      </CardContent>
      {/* <h4 >  {name} </h4>
      <h4> class: {cardClass} </h4>
      <h4> cost: {cost} </h4>
      <h4> rarity: {rarity} </h4>
      <img src = {url}/>
      <h4> text: {text} </h4> */}
    </Card>
    
  );
};

export default HearthstoneCard;
