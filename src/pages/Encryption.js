import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as CurvedRight } from '../images/curved-right-arrow.svg'
import { ReactComponent as CurvedLeft } from '../images/curved-left-arrow.svg'

// const tickVariants = {
//   pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
//   checked: { pathLength: 1 },
//   unchecked: { pathLength: 0 },
// }

const arrowVariants = {
  show: { pathLength: 1 },
  hide: { pathLength: 0 },
}

export default function Encryption() {
  const [showArrows, setShowArrows] = useState(1)
  return (
    <div className="flex flex-col relative">
      {/* <div className="absolute w-full h-full">
        <img src={red} className="absolute w-1/2" alt="Red" />
        <LinesHeader className="w-full absolute -top-10" />
      </div> */}
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 w-full h-full pb-32">
        <h2 className="font-bold text-4xl text-center mt-20 mb-10">
          Every hash is one-way!
        </h2>
        <div
          className="flex justify-around relative py-40 cursor-pointer"
          onClick={() => setShowArrows(showArrows + 1)}>
          <motion.svg
            width="708"
            height="143"
            initial={false}
            animate={showArrows > 1 ? 'show' : 'hide'}
            transition={{ duration: 2 }}
            className="absolute top-0"
            viewBox="0 0 708 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M2 141C112.167 39.5844 407 -104.803 705 128.97"
              stroke="#00FFF5"
              variants={arrowVariants}
              transition={{ duration: 1 }}
              style={{ strokeWidth: 5 }}
            />
            {showArrows > 1 && (
              <motion.path
                d="M705 132.5C706.381 132.5 707.5 131.381 707.5 130L707.5 107.5C707.5 106.119 706.381 105 705 105C703.619 105 702.5 106.119 702.5 107.5L702.5 127.5L682.5 127.5C681.119 127.5 680 128.619 680 130C680 131.381 681.119 132.5 682.5 132.5L705 132.5ZM702.232 130.768L703.232 131.768L706.768 128.232L705.768 127.232L702.232 130.768Z"
                fill="#00FFF5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            )}
          </motion.svg>
          <p className="text-3xl font-bold">aw3somepassword</p>
          <p className="text-3xl font-bold text-red">
            {/* MzZ+RGcG8XPOadBtrvdiGw== */}
            20ad9f9724eee51891392f8f1cc31ab7
          </p>
          <motion.svg
            width="708"
            height="143"
            viewBox="0 0 708 143"
            initial={false}
            animate={showArrows > 2 ? 'show' : 'hide'}
            transition={{ duration: 2 }}
            className="absolute bottom-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M706 2C595.833 103.416 301 247.803 3 14.0302"
              stroke="#00FFF5"
              stroke-width="5"
              variants={arrowVariants}
              transition={{ duration: 1 }}
              style={{ strokeWidth: 5 }}
            />
            {showArrows > 2 && (
              <motion.path
                d="M3 10.5C1.61929 10.5 0.5 11.6193 0.5 13L0.5 35.5C0.5 36.8807 1.61929 38 3 38C4.38071 38 5.5 36.8807 5.5 35.5L5.5 15.5L25.5 15.5C26.8807 15.5 28 14.3807 28 13C28 11.6193 26.8807 10.5 25.5 10.5L3 10.5ZM5.76777 12.2322L4.76777 11.2322L1.23223 14.7678L2.23223 15.7678L5.76777 12.2322Z"
                fill="#00FFF5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            )}
          </motion.svg>
          <motion.svg
            initial={false}
            animate={showArrows > 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-0 transform translate-y-1/2 w-52 h-52 fill-current text-red"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              variants={arrowVariants}
              transition={{ delay: 1 }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
