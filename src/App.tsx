import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CardFront from './components/CardFront';
import {fetchCards} from './store/cardsSlice'

function App() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  console.log(cards);

  return (
    <div className="layout">
      <div className="grid">
        {cards.map((card) => (
          <CardFront key={card.id} front={card.properties.Name.title[0].plain_text} />
        ))}
      </div>
    </div>
  );
}
export default App;
