import React from 'react'

const CurrenyRow = (props) => {

  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props;

  return (
    <div>
      <input type="number" className="input" value={amount}  onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {
          currencyOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))
        }
      </select>

    </div>
  )
}

export default CurrenyRow;