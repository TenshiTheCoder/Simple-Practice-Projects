import InfinityKermit from "../assets/Infinity_Kermit.png"
import "../style/Hover-Card.css"

function Card2() {
  return (
    <div className = "card-container2">
      <img src = {InfinityKermit} alt = "Kermit with the Infinity Gauntlet" className = "kermit-image2"/>
      <h2 className = "kermit-title2">Kermit with The Infinity Gauntlet</h2>
      <p className = "kermit-description2">What would happen if Kermit was stronger and had the infinity gauntlet? Well this is what this picture is all about! (Now with hover effects)</p>
    </div>
  )
}

export default Card2