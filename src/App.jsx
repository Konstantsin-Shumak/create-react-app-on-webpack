import React, { useCallback } from "react";
import { ImportBlock } from "./components/InputBlock/index.jsx";
import { OutputBlock } from "./components/OutputBlock/index.jsx";

export const App = () => {
  const interestRate = 0.035;
  const currency = "₽";

  const [autoPrice, setAutoPrice] = React.useState(3300000);
  const [percent, setPercent] = React.useState(13);
  const [months, setMonths] = React.useState(60);
  const [isLoading, setIsLoading] = React.useState(false);

  const getPercent = percent / 100;

  const initialFree = () => getPercent * autoPrice;

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
          inputProperty={currency}
          value={autoPrice}
          rangeMin={1000000}
          rangeMax={6000000}
          onInputChange={setAutoPrice}
          isLoading={isLoading}
        />
        <ImportBlock
          title={"Первоначальный взнос"}
          inputProperty={"%"}
          percent={percent}
          value={initialFree().toFixed()}
          rangeMin={10}
          rangeMax={60}
          onInputChange={setPercent}
          isLoading={isLoading}
        />
        <ImportBlock
          title={"Срок лизинга"}
          inputProperty={"мес."}
          value={months}
          rangeMin={1}
          rangeMax={60}
          onInputChange={setMonths}
          isLoading={isLoading}
        />
      </div>

      <div className="wrapper__output-blocks">
        <OutputBlock
          title={"Сумма договора лизинга"}
          value={amountLease().toFixed()}
          currency={currency}
        />
        <OutputBlock
          title={"Ежемесячный платех от"}
          value={monthPay().toFixed()}
          currency={currency}
        />
        <div className="button-conainer">
          <button className="button">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};
