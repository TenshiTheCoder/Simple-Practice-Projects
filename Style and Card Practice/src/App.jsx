import './App.css';
import Card1 from './components/Basic-Card.jsx';
import Card2 from './components/Hover-Card.jsx';
import CardGrid from './components/Card-Grid.jsx';
import ButtonOverlay from './components/Button-Overlay.jsx';
import Counter from './components/Counter.jsx';
import Show from './components/Show.jsx';
function App() {
  return (
    <div>
      <Card1 />
      <Card2 />
      <CardGrid />
      <ButtonOverlay />
      <Counter />
      <Show />
    </div>
  );
}

export default App;
