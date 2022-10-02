import React, { useCallback } from "react";
import { ImportBlock } from "./components/InputBlock/index.jsx";

export const App = () => {
  const [autoPrice, setAutoPrice] = React.useState(3300000);
  const [percent, setPercent] = React.useState(13);
  const [months, setMonths] = React.useState(60);

  const getPercent = () => percent / 100;

  const initialFree = () => getPercent() * autoPrice;

  const interestRate = 0.035;

  const monthPay = useCallback(
    () =>
      (autoPrice - initialFree()) *
      ((interestRate * Math.pow(1 + interestRate, months)) /
        (Math.pow(1 + interestRate, months) - 1)),
    [autoPrice, initialFree, months]
  );

  const amountLease = useCallback(
    () => initialFree() + months * monthPay(),
    [initialFree, months, monthPay]
  );

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
          onInputChange={setAutoPrice}
        />
        <ImportBlock
          title={"Первоначальный взнос"}
          inputProperty={"%"}
          percent={percent}
          value={initialFree().toFixed()}
          rangeMin={10}
          rangeMax={60}
          onInputChange={setPercent}
        />
        <ImportBlock
          title={"Срок лизинга"}
          inputProperty={"мес."}
          value={months}
          rangeMin={1}
          rangeMax={60}
          onInputChange={setMonths}
        />
      </div>

      <div className="wrapper__output-blocks">
        <div className="output-block">
          <p className="output-block__title">Сумма договора лизинга</p>
          <div className="output-block__result">
            <h2>{amountLease().toFixed()}</h2>
            <span className="result__currency">₽</span>
          </div>
        </div>

        <div className="output-block">
          <p className="output-block__title">Ежемесячный платех от</p>
          <div className="output-block__result">
            <h2>{monthPay().toFixed()}</h2>
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
