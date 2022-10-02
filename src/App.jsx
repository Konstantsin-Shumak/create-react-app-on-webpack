import React from "react";
import WebkitInputRangeFillLower from "../scripts/WebkitInputRangeFillLower";

export const App = () => {
  React.useEffect(() => {
    new WebkitInputRangeFillLower({
      selectors: ["rus-range", "mounth-range", "percent-range"],
      angle: 90,
      color: "#ff9514",
    });
  }, []);
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">
        Рассчитайте стоимость
        <br />
        автомобиля в лизинг
      </h1>
      <div className="wrapper__input-blocks">
        <div className="input-block">
          <p className="input-block__title">Стоимость автомобиля</p>
          <div className="input-block__input-content">
            <div className="input-content__input">
              <input className="input-number" type="number" />
              <span className="input__span-rub">₽</span>
            </div>
            <input
              className="input-range"
              type="range"
              min="0"
              max="100000"
              id="rus-range"
            />
          </div>
        </div>

        <div className="input-block">
          <p className="input-block__title">Первоначальный взнос</p>
          <div className="input-block__input-content --disable">
            <div className="input-content__input">
              <input className="input-number" type="number" disabled />
              <span className="input__span-percent">13%</span>
            </div>
            <input
              className="input-range"
              type="range"
              min="0"
              max="100000"
              id="percent-range"
              disabled
            />
          </div>
        </div>

        <div className="input-block">
          <p className="input-block__title">Срок лизинга</p>
          <div className="input-block__input-content">
            <div className="input-content__input">
              <input className="input-number" type="number" />
              <span className="input__span-month">мес.</span>
            </div>
            <input
              className="input-range"
              type="range"
              min="0"
              max="100000"
              id="mounth-range"
            />
          </div>
        </div>
      </div>

      <div className="wrapper__output-blocks">
        <div className="output-block">
          <p className="output-block__title">Сумма договора лизинга</p>
          <div className="output-block__result">
            <h2>4 467 313</h2>
            <span className="result__currency">₽</span>
          </div>
        </div>

        <div className="output-block">
          <p className="output-block__title">Ежемесячный платех от</p>
          <div className="output-block__result">
            <h2>114 455</h2>
            <span className="result__currency">₽</span>
          </div>
        </div>
        <div className="button-conainer">
          <button className="button">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};
