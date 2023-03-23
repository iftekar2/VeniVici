import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [catImage, setCatImage] = useState("");
  const [prevImages, setPrevImages] = useState([]);

  const getCatImage = () => {
    Axios.get("https://api.thecatapi.com/v1/images/search").then((response) => {
      setCatImage(response.data[0].url);
      setPrevImages(() => [...prevImages, catImage]);
    });
  };

  return (
    <div>
      <div className="App">
        <h1>Cat-a-pix</h1>
        <h3>Your daily dose of feline fun</h3>
        <img src={catImage}></img>
        <div className="randomButton">
          <button onClick={getCatImage}>
            <i className="fa-solid fa-shuffle"></i>
            <p>Discover</p>
          </button>
        </div>

        <div className="historySidebar">
          {prevImages.map((pic, index) => (
            <img
              className="gallery-screenshot"
              src={pic}
              alt="Undefined screenshot from query"
              width="500"
            />
          ))}
          <img className="sideImage" src={prevImages}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
