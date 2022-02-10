import React, { useState } from 'react'

export default function CheckPassword() {
  const [value, setValue] = useState('')

  const [time, setTime] = useState(null)

  const checkNumbersSecurity = (number) => {
    return number < 4
      ? 'Instantly'
      : number === 4
      ? '0.3 milliseconds'
      : number === 5
      ? '3 milliseconds'
      : number === 6
      ? '33 milliseconds'
      : number === 7
      ? '330 milliseconds'
      : number === 8
      ? '3.3 seconds'
      : number === 9
      ? '33 seconds'
      : number === 10
      ? '5.6 minutes'
      : number === 11
      ? '56 minutes'
      : number === 12
      ? '9.3 hours'
      : number === 13
      ? '3.9 days'
      : number === 14
      ? '39 days'
      : number === 15
      ? '1.1 years'
      : number === 16
      ? '11 years'
      : 'More than 11 years'
  }
  const checkLowerCaseSecurity = (number) => {
    return number < 4
      ? 'Instantly'
      : number === 4
      ? '15 milliseconds'
      : number === 5
      ? '400 milliseconds'
      : number === 6
      ? '10 seconds'
      : number === 7
      ? '4.5 minutes'
      : number === 8
      ? '1.9 hours'
      : number === 9
      ? '2.1 days'
      : number === 10
      ? '54 days'
      : number === 11
      ? '3.9 years'
      : number === 12
      ? '100 years'
      : number === 13
      ? '2600 years'
      : number === 14
      ? '68000 years'
      : number === 15
      ? '1800000 years'
      : number === 16
      ? '46000000 years'
      : 'More than 46000000 years'
  }

  const checkAlphanumericSecurity = (number) => {
    return number < 4
      ? 'Instantly'
      : number === 4
      ? '490 milliseconds'
      : number === 5
      ? '31 seconds'
      : number === 6
      ? '32 minutes'
      : number === 7
      ? '33 hours'
      : number === 8
      ? '84 days'
      : number === 9
      ? '14 years'
      : number === 10
      ? '890 years'
      : number === 11
      ? '55000 years'
      : number === 12
      ? '3400000 years'
      : number === 13
      ? '210000000 years'
      : number === 14
      ? '13000000000 years'
      : number === 15
      ? '810000000000 years'
      : number === 16
      ? '5000000000000 years'
      : 'More than 5000000000000 years'
  }
  const checkAllCharactersSecurity = (number) => {
    return number < 4
      ? 'Instantly'
      : number === 4
      ? '2.7 seconds'
      : number === 5
      ? '4.3 minutes'
      : number === 6
      ? '6.8 hours'
      : number === 7
      ? '27 days'
      : number === 8
      ? '7 years'
      : number === 9
      ? '670 years'
      : number === 10
      ? '63000 years'
      : number === 11
      ? '600000 years'
      : number === 12
      ? '570000000 years'
      : number === 13
      ? '54000000000 years'
      : number === 14
      ? '5100000000000 years'
      : number === 15
      ? '490000000000000 years'
      : number === 16
      ? '47000000000000000 years'
      : 'More than 47000000000000000 years'
  }

  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full">
        {/* <img src={red} className="absolute w-1/2" alt="Red" />
        <LinesHeader className="w-full absolute -top-10" /> */}
      </div>
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 pb-20">
        <h2 className="text-4xl text-center my-10">
          How secure is my password?
        </h2>
        <div className="flex mx-auto max-w-3xl relative">
          <input
            type="password"
            value={value}
            placeholder="Text for hashing"
            className="w-full bg-dark placeholder-gray text-white p-4 rounded-md"
            onChange={(e) => {
              setValue(e.target.value)
              const specialCharacters =
                /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
              if (e.target.value !== '') {
                setTime(checkAllCharactersSecurity(e.target.value.length))
              }
              if (!specialCharacters.test(e.target.value)) {
                setTime(checkAlphanumericSecurity(e.target.value.length))
              }
              if (
                e.target.value === e.target.value.toLowerCase() &&
                e.target.value.replace(/[^0-9]/g, '') === '' &&
                !specialCharacters.test(e.target.value)
              ) {
                setTime(checkLowerCaseSecurity(e.target.value.length))
              }
              if (!isNaN(Number(e.target.value))) {
                setTime(checkNumbersSecurity(e.target.value.length))
              }
              if (e.target.value === '') setTime(null)
            }}
          />
        </div>
        <div className="max-w-3xl flex justify-center items-center bg-green mx-auto mt-10 rounded-md text-black font-lilita text-2xl p-5">
          {time ? time : '---'}
        </div>
      </div>
    </div>
  )
}
