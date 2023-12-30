import React from 'react'
import Rotation from './Rotation/Rotation';
import "./Clipboard.css"

function Clipboard(props) {

  const desertSpots = ["Lagoon", "River 2", "Splash Pool", "B. Drop", "River 1"];
  const oasisSpots = ["River 6", "Wave 1", "Wave 2", "B. Twister", "B. Rhino"];
  const mirageSpots = ["B. Victoria", "B. Master", "Leopard R", "Leopard T", "River 5", "River 4","River 3"];
  const islandSpots = ["Tikos Roamer", "Tikos River", "Activity 1", "Activity 2"];

  return (
    <section className={props.className} >
    <Rotation name={"Desert"} spots={desertSpots}/>
    <Rotation name={"Oasis"} spots={oasisSpots}/>
    <Rotation name={"Mirage"} spots={mirageSpots}/>
    <Rotation name={"Island"} spots={islandSpots}/>
    {/* <div>
      <div className='prueba'>
      <h1>Doble</h1>
    </div>
    <div className='prueba5'>
      <h1>morning</h1>
    </div>
    <div className='prueba2'>
      <h1>2:30</h1>
    </div>
    <div className='prueba3'>
      <h1>4:30</h1>
    </div>
    <div className='prueba4'>
      <h1>mid</h1>
    </div>
    </div> */}
    </section>
    
  )
}

export default Clipboard