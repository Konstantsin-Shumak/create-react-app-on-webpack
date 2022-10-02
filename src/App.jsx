import React from "react";
import { ImportBlock } from "./components/InputBlock/index.jsx";

export const App = () => {
  const [autoPrice, setAutoPrice] = React.useState(3300000);
  const [percent, setPercent] = React.useState(13);
  const [mounth, setMounth] = React.useState(60);

  return (
    <div className="wrapper">
      <h1 className="wrapper__title">
        Рассчитайте стоимость
        <br />
        автомобиля в лизинг
      </h1>
      <div className="wrapper__input-blocks">
        <ImportBlock
          title={"Стоимость автомобиля"}
          inputProperty={"₽"}
          value={autoPrice}
          rangeMin={1000000}
          rangeMax={6000000}
          rangeName={"currency"}
          onInputChange={setAutoPrice}
        />
        <ImportBlock
          title={"Первоначальный взнос"}
          inputProperty={"%"}
          value={percent}
          rangeMin={10}
          rangeMax={60}
          rangeName={"percent"}
          onInputChange={setPercent}
        />
        <ImportBlock
          title={"Срок лизинга"}
          inputProperty={"мес."}
          value={mounth}
          rangeMin={1}
          rangeMax={60}
          rangeName={"mounth"}
          onInputChange={setMounth}
        />
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
