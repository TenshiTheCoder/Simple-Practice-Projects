import {FaArrowUp} from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import "../style/Card-Grid.css";
function CardGrid () {
  return (
    <div className = "grid-container">
      <div className = "up-arrow"><FaArrowUp /></div>
      <div className = "right-arrow"><FaArrowRight /></div>
      <div className = "left-arrow"><FaArrowLeft /></div>
      <div className = "down-arrow"><FaArrowDown /></div>
    </div>
  )
}

export default CardGrid