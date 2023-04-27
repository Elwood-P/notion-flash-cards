import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import Overlay from './components/Overlay';
import { fetchCards } from './store/cardsSlice';

function App() {
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.cards.cardsData);
  const activeCardId = useSelector((state) => state.cards.activeCardId);

  const isCardActive = activeCardId !== null;
  const activeCardData = isCardActive ? cardsData.find((card) => card.id === activeCardId) : null;

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  console.log(cardsData);

  return (
    <div className="layout">
      <div className="grid">
        {cardsData.map((card) => (
          <CardFront key={card.id} id={card.id} front={card.properties.Name.title[0].plain_text} />
        ))}
        {isCardActive && (
          <Overlay>
            <CardBack id={activeCardId} front={activeCardData.properties.Name.title[0].plain_text} back={activeCardData.properties.Name.title[0].plain_text} />
          </Overlay>
        )}
      </div>
    </div>
  );
}
export default App;
