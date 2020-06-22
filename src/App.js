import React, { useState, useEffect } from 'react';
import Input from './components/Form';
import Cards from './components/Cards';
import CalculateInstallments from './functions/calculate';

export default function App() {
  const [ammount, setAmmount] = useState(1000);
  const [interest, setInterest] = useState(0.5); // Juros
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    setInstallments(CalculateInstallments(ammount, interest, period));
  }, [ammount, interest, period]);

  const handleValueChange = (ammountValue, interesetValue, periodValue) => {
    ammountValue !== null && setAmmount(Number(ammountValue));

    interesetValue !== null && setInterest(Number(interesetValue));

    periodValue !== null && setPeriod(Number(periodValue));
  };

  return (
    <div className="container">
      <h1 className="center">Cálculo de juros composto</h1>
      <Input
        onChangeValue={handleValueChange}
        data={{ ammount, interest, period }}
      />
      <div className="row">
        {installments.map((installment) => {
          return (
            <Cards
              key={installment.id}
              colorCard={
                interest < 0
                  ? 'red lighten-4 red-text'
                  : 'teal lighten-4 teal-text'
              }
              colorBackText={interest < 0 ? 'red lighten-5' : 'teal lighten-5'}
              values={{
                value: installment.value,
                percent: installment.percent,
                diference: installment.diference,
              }}
              cardId={installment.id}
            />
          );
        })}
      </div>
    </div>
  );
}
