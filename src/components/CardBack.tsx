function CardBack({ front, back }) {
  return <div className="card card--back">
    <div>
      {front}
    </div>
    <div>
      {back}
    </div>
  </div>;
}

export default CardBack;
