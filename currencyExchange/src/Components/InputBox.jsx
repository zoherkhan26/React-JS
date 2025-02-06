import React from 'react'

function InputBox({
  
  label,
  amount,
  onAmountChange,
  currencylist = [],
  onCurrencyChange,
  isAmountenabled = false,
  selectedCurrency = 'usd',
  isCurrencyEnabled = false,
  currencyOption,
  className = ''
}
) {





  return (
     
     <div className={`${className} bg-white w-auto h-32  rounded-md justify-between flex  flex-wrap m-3`}>
        <div className='flex flex-col gap-y-5 text-gray-600 px-2'>
      <label >{label}</label>
                <input 
                type="number"
                className='border-2 border-gray-600  rounded '
                value={amount}
                disabled = {isAmountenabled}
                onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}  
                />
        </div>

        <div className='flex flex-col gap-y-5 text-gray-600 px-2'>
             <p className=''>Currency</p>
             <select 
             value={selectedCurrency} 
             className='border-2 border-gray-600'
             disabled = {isCurrencyEnabled}
             onChange={(e) => {onCurrencyChange(e.target.value)}}
             >
             {currencylist.map( (currency) => (

              <option value={currency} key={currency}>{currency}</option>
             ))}
              </select>         


        </div>



     </div>
  )
}

export default InputBox