import { useState } from "react";
import Card from "./Card";
import "./MemoryGame.css";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "../Img/banana.png", state: "" },
      { id: 1, img: "../Img/banana.png", state: "" },
      { id: 2, img: "../Img/cherry.png", state: "" },
      { id: 2, img: "../Img/cherry.png", state: "" },
      { id: 3, img: "../Img/coconut.png", state: "" },
      { id: 3, img: "../Img/coconut.png", state: "" },
      { id: 4, img: "../Img/grape.png", state: "" },
      { id: 4, img: "../Img/grape.png", state: "" },
      { id: 5, img: "../Img/orange.png", state: "" },
      { id: 5, img: "../Img/orange.png", state: "" },
      { id: 6, img: "../Img/pineapple.png", state: "" },
      { id: 6, img: "../Img/pineapple.png", state: "" },
      { id: 7, img: "../Img/strawberry.png", state: "" },
      { id: 7, img: "../Img/strawberry.png", state: "" },
      { id: 8, img: "../Img/watermelon.png", state: "" },
      { id: 8, img: "../Img/watermelon.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [previous, setPrevious] = useState(-1);

  function checkClicked(current) {
    if (items[current].id == items[previous].id) {
      items[current].state = "correct";
      items[previous].state = "correct";
      setItems([...items]);
      setPrevious(-1);
    } else {
      items[current].state = "wrong";
      items[previous].state = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].state = "";
        items[previous].state = "";
        setItems([...items]);
        setPrevious(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (previous == -1) {
      items[id].state = "active";
      setItems([...items]);
      setPrevious(id);
    } else {
      checkClicked(id);
    }
  }

  return (
    <div className="memory-game-container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
