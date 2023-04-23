import './App.css';
import CardFront from './components/CardFront';

function App() {
  const dummyCards = [
    { ID: 1, front: 'What is the capital of South Africa?', back: 'Cape Town, Pretoria & Bloemfontein' },
    { ID: 2, front: 'What is the capital of Lesotho?', back: 'Maseru' },
    { ID: 3, front: 'What is the capital of Eswatini?', back: 'Mbabane' },
    { ID: 4, front: 'What is the capital of Namibia?', back: 'Windhoek' },
    { ID: 5, front: 'What is the capital of Botswana?', back: 'Gaborone' },
    { ID: 6, front: 'What is the capital of Zimbabwe?', back: 'Harare' },
  ];

  return (
    <div className="layout">
      <div className="grid">
        {dummyCards.map((card) => (
          <CardFront key={card.ID} front={card.front} />
        ))}
      </div>
    </div>
  );
}
export default App;
