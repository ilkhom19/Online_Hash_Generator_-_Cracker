import React, { useState } from 'react'
import { ReactComponent as TextField } from '../images/text-field.svg'
import ballLines from '../images/ball-lines.png'
import green from '../images/green.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function HashInfo() {
  const [text, setText] = useState(true)
  return (
    <div className="relative">
      <div className="absolute w-full h-full">
        <img src={ballLines} className="absolute top-0 -left-28" alt="Lines" />
        <img src={green} className="absolute right-0 -top-52" alt="Green" />
      </div>
      <div className="bg-dark-blue h-full bg-opacity-40 backdrop-blur-sm z-10 relative pt-20 pb-44">
        <div className="w-auto h-auto flex justify-end px-10 relative">
          <div className="flex cursor-pointer" onClick={() => setText(!text)}>
            <TextField />
            <AnimatePresence>
              {text && (
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: -100 }}
                  className="absolute top-9 right-16 max-w-2xl h-full z-10 text-black font-lilita text-3xl scrolling select-none">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis nemo optio facilis saepe quasi voluptate itaque. Ab
                  hic distinctio labore suscipit asperiores voluptate,
                  repellendus magni! Dignissimos fuga quis pariatur repellat!
                </motion.p>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!text && (
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: -100 }}
                  className="absolute top-9 right-16 max-w-2xl break-all h-full z-10 text-black font-lilita text-3xl select-none">
                  4192e1c612173489fe691219384b882d0939307ec0297cdd19e9f3283d1fa5d7
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
