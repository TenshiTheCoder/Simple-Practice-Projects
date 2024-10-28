import InfinityKermit from "../assets/Infinity_Kermit.png"
import "../style/Basic-Card.css"

function card1() {
  return (
    <div className = "card-container">
      <img src = {InfinityKermit} alt = "Kermit with the Infinity Gauntlet" className = "kermit-image"/>
      <h2 className = "kermit-title">Kermit with The Infinity Gauntlet</h2>
      <p className = "kermit-description">What would happen if Kermit was stronger and had the infinity gauntlet? Well this is what this picture is all about!</p>
    </div>
  )
}

export default card1