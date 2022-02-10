import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as PlainText } from '../images/plain-text.svg'
import { ReactComponent as Encryption } from '../images/encryption.svg'
import { ReactComponent as Hashing } from '../images/hashing.svg'

function Way({ Svg, title }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="relative text-center">
      <Svg onClick={() => setVisible(!visible)} />
      {visible && (
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center text-3xl font-lilita mt-8 absolute w-full">
          {title}
        </motion.p>
      )}
    </div>
  )
}

export default function WhyHash() {
  return (
    <div className="flex flex-col relative">
      {/* <div className="absolute w-full h-full">
        <img src={red} className="absolute w-1/2" alt="Red" />
        <LinesHeader className="w-full absolute -top-10" />
      </div> */}
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 w-full h-full pb-32">
        <h2 className="font-bold text-4xl text-center mt-20">
          The types of passwords that are kept in data base
        </h2>
        <div className="flex justify-center items-end space-x-40 mt-10">
          <Way Svg={PlainText} title="Plain Text" />
          <Way Svg={Encryption} title="Encryption" />
          <Way Svg={Hashing} title="Hashing" />
        </div>
      </div>
    </div>
  )
}
