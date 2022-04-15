import React, { useState, useEffect } from 'react';

function Squad() {
    const [squad, setSquad] = useState([]);

    useEffect(() => {
        fetch('/squad/').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setSquad(jsonRes.squad))
    })

    return(
        <div>
            {squad.map(player => <li key={player.id}>{player.name} {player.number} <img src={player.img}></img><img src={player.flag}></img></li>)}
        </div>
    )
}

export default Squad;