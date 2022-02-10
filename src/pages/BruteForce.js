import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loading = () => {
  return (
    <div className="loading-box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default function BruteForce() {
  const [value, setValue] = useState('')
  const [hacked, setHacked] = useState(null)
  const [loading, setLoading] = useState(false)

  const hack = async (hash) => {
    if (hash !== '') {
      const request = new Request(
        `https://md5-reverse-search.p.rapidapi.com/API/md5.php?hash=${hash}`,
        {
          headers: new Headers({
            'x-rapidapi-key':
              '2f2c6e86b0msh85c7a5dcd5db82dp10eaa8jsn10d7632854e9',
            'x-rapidapi-host': 'md5-reverse-search.p.rapidapi.com',
            useQueryString: true,
          }),
        }
      )
      return fetch(request).then((r) => {
        return r.ok ? r.text() : Promise.reject(r)
      })
    }
  }
  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full">
        {/* <img src={red} className="absolute w-1/2" alt="Red" />
        <LinesHeader className="w-full absolute -top-10" /> */}
      </div>
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 pb-20">
        <h2 className="text-4xl text-center my-10">Crack your hash</h2>
        <div className="flex mx-auto max-w-3xl relative">
          <input
            type="text"
            value={value}
            placeholder="Text for hashing"
            className="w-full bg-dark placeholder-gray text-white p-4 rounded-l-md"
            onChange={(e) => {
              setValue(e.target.value)
              setHacked(null)
            }}
          />
          <button
            className="bg-bluishgreen-dark py-2 rounded-r-md px-10 text-xl outline-none focus:outline-none"
            onClick={async () => {
              if (value !== '') {
                setLoading(true)
                const password = await hack(value)
                setHacked(password)
                setLoading(false)
              }
            }}>
            crack
          </button>
        </div>
        {/* <AnimatePresence> */}
        {loading && (
          <div className="flex justify-center items-center mt-10">
            <Loading />
          </div>
        )}
        {/* </AnimatePresence> */}
        <AnimatePresence>
          {hacked && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="max-w-3xl flex justify-center items-center bg-green mx-auto mt-10 rounded-md text-black font-lilita text-2xl p-5">
              {hacked}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
