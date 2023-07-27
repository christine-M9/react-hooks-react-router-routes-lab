import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItem=actors.map((actor)=>( 
    <div key={actor.name}>
      <h3>{actor.name}</h3>
      <ul>
        {
          actor.movies.map((move)=>( 
            <li key={move}>{move}</li>
          ))
        }
      </ul>

    </div>
  ))
  return (
  <div>
   <h1>Actors Page</h1>
   {actorsItem}
  </div>
  )
}

export default Actors;