import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const baseURL = "https://thesimpsonsquoteapi.glitch.me/quotes";

  const [quote, setQuote] = useState(null);
  const [character, setCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(baseURL);
      const { data } = response;
      const { quote, character } = data[0];
      setQuote(quote);
      setCharacter(character);
    } catch (error) {
      console.error("There was a problem with the axios request:", error);
    }
  };

  const fetchQuoteByCharacter = async () => {
    try {
      const response = await axios.get(`${baseURL}?character=${searchTerm}`);
      const { data } = response;
      console.log({ data });
      if (data.length > 0) {
        const { quote, character } = data[0];
        setQuote(quote);
        setCharacter(character);
      } else {
        setQuote("No se encontraron citas para ese personaje.");
        setCharacter(null);
      }
    } catch (error) {
      console.error("There was a problem with the axios request:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFetchQuote = () => {
    if (searchTerm === "") {
      fetchRandomQuote();
    } else {
      fetchQuoteByCharacter();
    }
  };

  return (
    <div className="card">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Character's name"
      />
      <div className="card1">
        <div className="card2">
          <p className="quote">{quote}</p>
        </div>
        <p className="character">{character}</p>
      </div>
      <button onClick={handleFetchQuote}>Show me more</button>
    </div>
  );
}

export default Card;
