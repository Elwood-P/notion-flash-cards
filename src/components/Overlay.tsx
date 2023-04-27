import { useDispatch } from 'react-redux';
import { makeCardInActive } from '../store/cardsSlice';

function Overlay({ children }) {
  const dispatch = useDispatch();

  function overlayClickHandler(e) {
    if (e.currentTarget === e.target) dispatch(makeCardInActive());
  }

  return (
    <div className="overlay" onClick={(e) => overlayClickHandler(e)}>
      {children}
    </div>
  );
}

export default Overlay;
