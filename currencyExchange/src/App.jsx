import { useEffect, useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Crimage from './assets/Crimage.jpg'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setfrom] = useState('usd');
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const data = useCurrencyInfo(from);
  const option = Object.keys(data);



  const swapCurrency = () => {
    setfrom(to);
    setTo(from);
    setAmount(convertedAmount)
    setConvertedAmount(amount)


  }
  const getDigit = (amount * data[to])
  const getTwoDecimalDigits = (number) => {
    return Math.floor((number % 1) * 100);
  };

  const submit = () => {

    setConvertedAmount(Math.floor(getDigit))

  }




  return (
    <>
      <form
        preven
        onSubmit={(e) => {
          e.preventDefault()
          submit()




        }}>
        <div className='w-full h-screen flex flex-wrap justify-center items-center '
          style={{ backgroundImage: `url(${Crimage})` }}
        >
          <div className='flex h-auto w-[360px] justify-center flex-col items-center p-0 backdrop-blur-sm'>

            <InputBox
              label='From'
              amount={amount}
              onAmountChange={(amount) => { setAmount(amount) }}
              onCurrencyChange={(currency) => { setfrom(currency) }}
              currencylist={option}
              selectedCurrency={from}

            />

            <button
              className='bg-blue-700 w-16 h-9 rounded-md  text-white z-10 -translate-y-5'
              onClick={() => { swapCurrency() }}
            >Swap</button>

            <InputBox
              className='my-0 -translate-y-8'
              label='To'
              amount={convertedAmount}
              onAmountChange={(amount) => { setConvertedAmount(amount) }}
              onCurrencyChange={(currency) => { setTo(currency) }}
              currencylist={option}
              selectedCurrency={to}
            />

            <button
              type='submit'
              className='  bg-blue-700 w-[88%] h-10 rounded-md text-white -translate-y-6'
            >
              Convert
            </button>

          </div>
        </div>
      </form>
    </>
  )
}

export default App
