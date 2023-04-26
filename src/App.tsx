import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import Overlay from './components/Overlay';
import { fetchCards } from './store/cardsSlice';

function App() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const showBack = true;
  
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
        {showBack && (
          <Overlay>
            <CardBack />
          </Overlay>
        )}
      </div>
    </div>
  );
}
export default App;
