import React, { useState } from "react";
import "./Card.css";

export default function Card() {
  const [activ, setActiv] = useState(false);
  const [details, setDetails] = useState(false);

  const handleClick = () => {
   
    setActiv(true);
  };

  const handleDeleteClick = () => {
    setActiv(false);
    
  };

  const handleDetails = () => {
    setDetails(true);
  };

  const handleDeleteDetails = () => {
    setDetails(false);
  };

  return (
    <div className="card">
      <div>
        <img
          className="img"
          src="https://www.buro247.ru/thumb/670x830_0/images/logos/670x830_joyride.jpg"
          alt="Nike"
        />
      </div>
      <div className="Main">
        <div className="divText">
          <h3>Nike Sneaker</h3> <h3>$120</h3>
        </div>
        <div className="btndetali">
            <div className="divbut">
          <button className="btnDetails" onClick={handleDetails}>
            Детали
          </button></div>
          {details ? (
            <div className="divDetails">
              <div className="divDetailsText">
                Новая линейка кроссовок Nike отлично подойдут для бега
              </div>
              <div className="btndetX">
                <button onClick={handleDeleteDetails} className="btnX">
                  x
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <hr />
      <div>
      <div className="kros">
        <div className="description">
          Кроссовки Nike из линейки "Run"
        </div>
        <div className="btnbtn">
          <button className="btn2" disabled={activ} onClick={handleClick}>
            {activ ? "уже в корзине" : "Добавить в корзину"}
          </button>
          {activ && (
            <button onClick={handleDeleteClick} className="btnDelete">
              удалить из корзины
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}