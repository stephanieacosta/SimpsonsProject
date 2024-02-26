import React from "react";

function Quote({ quote, character }) {
  return (
    <div className="card1">
      <div className="card2">
        <p className="quote">{quote}</p>
      </div>
      <p className="character">{character}</p>
    </div>
  );
}

export default Quote;
