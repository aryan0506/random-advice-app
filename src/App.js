import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON from the response
      })
      .then((data) => {
        setAdvice(data.slip); // Log the advice
      })
      .catch((error) => {
        console.error("Error fetching advice:", error); // Handle errors
      });
  };

  return (
    <div className="App">
      <div className="advice-div">
        <small>Advice #{advice.id}</small>
        <p>"{advice.advice}"</p>
      </div>
      <button onClick={getAdvice}></button>
    </div>
  );
}

export default App;
