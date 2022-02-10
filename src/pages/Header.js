import React from 'react'
import { ReactComponent as Auth } from '../images/auth.svg'
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg'
// import { ReactComponent as LinesHeader } from '../images/lines-header.svg'
import red from '../images/red.png'
import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'

const arrowVariants = {
  show: { pathLength: 1 },
  hide: { pathLength: 0 },
}

export default function Header() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <div className="absolute w-full h-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.2, x: -200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: 'ease', duration: 1 }}
          src={red}
          className="absolute w-1/2"
          alt="Red"
        />
        {/* <LinesHeader  className="w-full absolute -top-10" /> */}
        <motion.svg
          width="1440"
          height="1000"
          initial="hide"
          animate="show"
          transition={{ duration: 2 }}
          className="w-full absolute -top-10"
          viewBox="0 0 1440 1126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M-610 1074L1087.5 107.5L2230 637L3381 -178"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M-610 1094L1087.5 127.5L2230 657L3381 -158"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2, delay: 0.1 }}
          />
          <motion.path
            d="M-610 1084L1087.5 117.5L2230 647L3381 -168"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.path
            d="M-610 1114L1087.5 147.5L2230 677L3381 -138"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.path
            d="M-610 1104L1087.5 137.5L2230 667L3381 -148"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2, delay: 0.4 }}
          />
          <motion.path
            d="M-610 1124L1087.5 157.5L2230 687L3381 -128"
            stroke="#00FFF5"
            strokeWidth="4"
            variants={arrowVariants}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.svg>
      </div>
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 pb-20">
        <div className="flex justify-center items-center mt-20 space-x-20">
          <motion.h1
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xxl">
            HASHING
          </motion.h1>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}>
            <Auth />
          </motion.div>
        </div>
        <div className="flex items-center justify-center flex-col mt-28 cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
            onClick={() => {
              scroller.scrollTo('scrolling', {
                duration: 1000,
                smooth: 'easeInOut',
                offset: -150,
              })
            }}>
            <p className="text-3xl font-lilita">What is it?</p>
            <ArrowDown />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
