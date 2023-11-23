import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import players from './players';

{/*  import the attribute for each player */}
const Player = ({ Name, Team,  jerseyNumber, Nationality, Age, Image })=> {


    {/* add some inline style for the player */}
    const playerStyle ={
        fontSize : "15px",
        padding :"20px",
        justifyContent: 'space-around',
        textAlign : "center",
        overFlow : "hidden",
        fontStyle :"oblique",
        marginLeft :"150px"
}

    return (
    <div className="col-md-4 mb-4" style={playerStyle}>
        {/* card of player  component*/}
        {/* add the attribut of player to the card*/}
        <Card  style={{ borderRadius: "20px"  }}> 
        <Card.Img variant="top" src={ Image} style={{ height: '400px', width: '100%', borderRadius: "20px"  }} />
        <Card.Body >
        <Card.Title style ={{color:"#3A9D23", fontWeight:"Bold"}}>{Name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        Team :  {Team} <br/>
        Jersey Number : {jerseyNumber}<br/>
        Nationality : {Nationality}<br/>
        Age : {Age} Years  <br/>
        </ListGroup>
    </Card>
    </div>
)
}

  {/* add default props */}
    players.defaultprops = [{
    Name: "Wahbi Khazri" ,
    Team :" Montpellier Hérault Sport Club",
    jerseyNumber: 10 ,
    Nationality : "French-Tunisien",
    Age: 32 ,
    Image :"wahbi.jpg"}
]

export default Player;
