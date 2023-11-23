import React from 'react'
import Player from './Player'
import players from "./players";


{/*  the playlist component*/}
const PlayersList = () => {
    return (
            
    <div  className="container">
            <div className="row">
                {/* mapping all the element in the array of player and work with  spread operator  */}
            {players.map((player, index) => (
        <Player key={index} {...player} />
        ))}
        </div>
    </div>
    )
}

export default PlayersList  ;
