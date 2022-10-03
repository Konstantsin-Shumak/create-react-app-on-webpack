import React, { useCallback, useState } from "react";
import { Button } from "./components/Button/index.jsx";
import { ImportBlock } from "./components/InputBlock/index.jsx";
import { OutputBlock } from "./components/OutputBlock/index.jsx";
import { postDataAsync } from "./scripts/postDataAsync.js";

export const App = () => {
  const interestRate = 0.035;
  const currency = "₽";

  const [autoPrice, setAutoPrice] = useState(3300000);
  const [percent, setPercent] = useState(13);
  const [months, setMonths] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  const getPercent = useCallback(() => percent / 100, [percent]);
  const initialFree = useCallback(
    () => getPercent() * autoPrice,
    [getPercent, autoPrice]
  );

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

  const sendInfo = () => {
    const data = {
      autoPrice: autoPrice,
      percent: percent,
      initialFree: initialFree(),
      months: months,
      monthPay: monthPay,
      amountLease: amountLease(),
    };

    setIsLoading(true);

    postDataAsync(data)
      .catch((err) => {
        console.warn(err);
        alert("Данные не прошли");
      })
      .finally(() => setIsLoading(false));
  };

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
          range={[1000000, 6000000]}
          onInputChange={setAutoPrice}
          isLoading={isLoading}
        />
        <ImportBlock
          title={"Первоначальный взнос"}
          inputProperty={"%"}
          percent={percent}
          value={initialFree()}
          range={[10, 60]}
          onInputChange={setPercent}
          isLoading={isLoading}
        />
        <ImportBlock
          title={"Срок лизинга"}
          inputProperty={"мес."}
          value={months}
          range={[1, 60]}
          onInputChange={setMonths}
          isLoading={isLoading}
        />
      </div>

      <div className="wrapper__output-blocks">
        <OutputBlock
          title={"Сумма договора лизинга"}
          value={amountLease()}
          currency={currency}
        />
        <OutputBlock
          title={"Ежемесячный платеж от"}
          value={monthPay()}
          currency={currency}
        />
        <Button onClickButton={sendInfo} isLoading={isLoading} />
      </div>
    </div>
  );
};
