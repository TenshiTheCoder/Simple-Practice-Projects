import WizardKermit from "../assets/Wizard_Kermit.jpg";
import "../style/Button-Overlay.css";

function ButtonOverlay() {
  return (
    <div className="button-overlay-container">
      <img src = {WizardKermit} alt = "Kermit as an amazing wizard" className ="kermit-wizard"></img>
      <h2 className = "kermit-wizard-title">Behold! Wizard Kermit</h2>
      <p className = "kermit-wizard-description">This is Kermit as a super magical wizard!</p>
      <button className = "kermit-wizard-button" onClick= {() => alert("Kermit Casts Muppet Mutation! You are now a muppet")}>Witness my magic!</button>
      <div className = "wizard-magic"></div>
    </div>
  );
}

export default ButtonOverlay;