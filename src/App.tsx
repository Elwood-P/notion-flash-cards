import { useEffect, useState } from 'react';
import './App.css';
import CardFront from './components/CardFront';

function App() {
  const [cards, setCards] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/.netlify/functions/notion-api');
      const data = await response.json();
      setCards(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(cards);

  return (
    <div className="layout">
      <div className="grid">
        {cards.map((card) => (
          <CardFront key={card.id} front={card.properties.Name.title[0]?.plain_text} />
        ))}
      </div>
    </div>
  );
}
export default App;
