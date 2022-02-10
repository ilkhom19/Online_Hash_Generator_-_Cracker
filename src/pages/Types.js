import React, { useState } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import milky from '../images/milky.png'

function Type({ className, children, styles }) {
  return (
    <motion.p
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'text-xl p-3 bg-bluishgreen-dark rounded-md absolute',
        className
      )}
      style={styles}>
      {children}
    </motion.p>
  )
}

export default function Types() {
  const [types, setTypes] = useState(false)
  return (
    <div className="flex flex-col relative items-center ">
      <div className="absolute w-full h-full">
        <img src={milky} className="absolute -top-20" alt="Milky" />
      </div>
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 w-full h-full py-20 flex justify-center">
        <button
          className="text-3xl px-8 py-3 text-center bg-dark rounded-lg cursor-pointer outline-none focus:outline-none"
          onClick={() => setTypes(!types)}>
          TYPES
        </button>
        {types && (
          <>
            <Type className="left-5 top-0">Tiger</Type>
            <Type className="left-1/3 top-3">SHA3</Type>
            <Type className="right-1/3 bottom-5">MD2</Type>
            <Type className="right-60 top-5">SHA-512</Type>
            <Type className="left-96 bottom-7">RipeMD128</Type>
            <Type className="top-7" styles={{ right: '38%' }}>
              SHA-1
            </Type>
            <Type className="left-20 bottom-12">Adler32</Type>
            <Type className="right-20 bottom-12">MD5</Type>
            <Type className="left-64 top-12">CRC32</Type>
          </>
        )}
      </div>
    </div>
  )
}
