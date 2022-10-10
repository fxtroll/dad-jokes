import { useState, useEffect } from "react"

export default function JokeBlock() {
  const [quote, setquote] = useState("hello gov")

  useEffect(() => {

    apiCall();
  }, []);

  let apiCall = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((res) => setquote(res.joke));
  };

  return (
    <div className="game-container">
      <div className="qoute-block">
        <p>{quote}</p>
      </div>
      <div onClick={apiCall} className="joke-button">
        <h1>New Joke</h1>
      </div>
    </div>
  );
};


