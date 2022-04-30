import React, { useState, useEffect } from 'react';
import '../App.css'

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

        <div className="d-flex flex-wrap justify-content-center">
            {squad.map(player => 

            <div className="row justify-content-center">

            
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 m-2">

                <div className="card text-center">
                    <h5 className="card-title">{player.name}</h5>
            
                        {/* <p className="number">{player.number}</p> */}
                    <img className="card-img-top" src={player.img} alt="players" />
                    <div className="card-body">
                        <p className="card-text">{player.position}</p>
                        <img src={player.flag} alt="flags" />
                    </div>
                </div>

            </div>
            </div>
            
                )}
        </div>
        </div>
    )




}

export default Squad;