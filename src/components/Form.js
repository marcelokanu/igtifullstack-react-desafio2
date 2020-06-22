import React from 'react';

export default function Input({ onChangeValue, data }) {
  const { ammount, interest, period } = data;

  const handleChangeValue = (event) => {
    if (event.target.id === 'inputAmmount') {
      onChangeValue(event.target.value, null, null);
    }
    if (event.target.id === 'inputInterest') {
      onChangeValue(null, event.target.value, null);
    }
    if (event.target.id === 'inputPeriod') {
      onChangeValue(null, null, event.target.value);
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12 m4 l4">
        <input
          id="inputAmmount"
          type="number"
          step="100"
          className="validate"
          onChange={handleChangeValue}
          value={Number(ammount).toString()}
        />
        <label className="active" htmlFor="inputAmmount">
          Montante Inicial
        </label>
      </div>
      <div className="input-field col s12 m4 l4">
        <input
          id="inputInterest"
          type="number"
          step="0.5"
          className="validate"
          onChange={handleChangeValue}
          value={Number(interest).toString()}
        />
        <label className="active" htmlFor="inputInterest">
          Taxa de Juros mensal
        </label>
      </div>
      <div className="input-field col s12 m4 l4">
        <input
          id="inputPeriod"
          type="number"
          step="1"
          className="validate"
          max="360"
          min="1"
          onChange={handleChangeValue}
          value={Number(period).toString()}
        />
        <label className="active" htmlFor="inputPeriod">
          Período (meses)
        </label>
      </div>
    </div>
  );
}
