import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'
import neopets from '../images/neopets.png'
import imgur from '../images/imgur.png'
import comcast from '../images/comcast.png'
import vk from '../images/vk.png'
import violet from '../images/violet.png'

function Company({ src, className, onClick }) {
  return (
    <motion.img
      initial={{ y: -200, x: -200, opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      className={cn('absolute', className)}
      onClick={onClick}
      src={src}></motion.img>
  )
}

export default function Companies() {
  const [step, setStep] = useState(1)
  return (
    <div className="flex flex-col relative ">
      <div className="absolute w-full h-full">
        <img
          src={violet}
          className="absolute w-1/2 right-0 top-20 "
          alt="Violet"
        />
      </div>
      <div className="relative pl-20">
        <div
          className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 w-full h-full px-16 relative"
          style={{ paddingBottom: '30rem' }}>
          <Company
            src={neopets}
            className="w-1/2"
            onClick={() => setStep(step + 1)}
          />
          {step > 1 && (
            <Company
              src={imgur}
              className="w-1/2 top-20 left-56"
              onClick={() => setStep(step + 1)}
            />
          )}
          {step > 2 && (
            <Company
              src={comcast}
              className="w-1/2 top-40 left-96"
              onClick={() => setStep(step + 1)}
            />
          )}
          {step > 3 && <Company src={vk} className="w-1/2 top-60 right-44" />}
        </div>
      </div>
    </div>
  )
}
