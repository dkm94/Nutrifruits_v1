import React from "react";
import "../Card/cards.css";

const Cards = ({ fruits, value }) => {
  return (
    <div className="card-grid">
      {fruits
        .filter((fruit) => {
          return fruit.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        })
        .map((fruit) => (
          <div className="card" key={fruit.id}>
            <div className="container">
              <div className="top">
                <img src={fruit.img} alt="fruits" />
              </div>
              <div className="bottom">
                <div className="details">
                  <h1>{fruit.name}</h1>
                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="contents">
                {/* <p>
                  FAMILY: <span>{fruit.family}</span>
                </p> */}
                <p>
                  PROTEIN: <span>{fruit.nutritions.protein} g</span>
                </p>
                <p>
                  FAT: <span>{fruit.nutritions.fat} g</span>
                </p>
                <p>
                  CALORIES: <span>{fruit.nutritions.calories} g</span>
                </p>
                <p>
                  SUGAR: <span>{fruit.nutritions.sugar} g</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cards;
