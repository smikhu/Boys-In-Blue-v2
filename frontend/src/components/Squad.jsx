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
                    <h5 className="card-title">{player.name} <span className="m-2"><img className="float-start" src={player.flag} alt="country flag" /></span></h5>
                    <p className="number">#{player.number}</p>
                    <img className="card-img-top" src={player.img} alt="player" />
                    <div className="card-body">
                        <p className="card-text h5">{player.position}</p>
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