import { useDispatch } from 'react-redux';
import { makeCardActive } from '../store/cardsSlice';

function CardFront({ front, id }) {
  const dispatch = useDispatch();

  return (
    <div className="card card--front" onClick={() => dispatch(makeCardActive(id))}>
      {front}
    </div>
  );
}

export default CardFront;
