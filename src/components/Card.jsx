import Input from "./Input";
import Quote from "./Quote";
import Button from "./Button";
import useQuoteFetch from "../hooks/useQuoteFetch";

function Card() {
  const { quote, character, searchTerm, handleInputChange, handleFetchQuote } =
    useQuoteFetch();

  return (
    <div className="card">
      <Input value={searchTerm} onChange={handleInputChange} />
      <Quote quote={quote} character={character} />
      <Button onClick={handleFetchQuote} />
    </div>
  );
}

export default Card;
