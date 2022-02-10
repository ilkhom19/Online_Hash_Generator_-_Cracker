import React, { useState } from 'react'
import Hashes from 'jshashes'

export default function Hashing() {
  const [value, setValue] = useState('')
  // new MD5 instance
  const MD5 = new Hashes.MD5()
  // new SHA1 instance
  const SHA1 = new Hashes.SHA1()
  // new SHA256 instance
  const SHA256 = new Hashes.SHA256()
  // new SHA512 instace
  const SHA512 = new Hashes.SHA512()
  // new RIPEMD-160 instace
  const RMD160 = new Hashes.RMD160()
  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full">
        {/* <img src={red} className="absolute w-1/2" alt="Red" />
        <LinesHeader className="w-full absolute -top-10" /> */}
      </div>
      <div className="bg-dark-blue bg-opacity-40 backdrop-blur-sm z-10 pb-20">
        <h2 className="text-4xl text-center my-10">Hash your password</h2>
        <div className="flex flex-col mx-auto max-w-3xl relative">
          <input
            type="text"
            value={value}
            placeholder="Text for hashing"
            className="w-full bg-dark placeholder-gray text-white p-4 rounded-md"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <div className="flex mt-5">
            <div className="w-32 bg-green p-3 rounded-l-md text-black text-xl font-bold">
              MD5:
            </div>
            <div className="w-full bg-bluishgreen-dark flex items-center p-3 text-xl rounded-r-md">
              {value === '' ? '' : MD5.hex(value)}
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-32 bg-green p-3 rounded-l-md text-black text-xl font-bold">
              SHA1:
            </div>
            <div className="w-full bg-bluishgreen-dark flex items-center p-3 text-xl rounded-r-md">
              {value === '' ? '' : SHA1.hex(value)}
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-32 bg-green p-3 rounded-l-md text-black text-xl font-bold">
              SHA256:
            </div>
            <div className="w-full bg-bluishgreen-dark flex items-center p-3 text-xl rounded-r-md">
              {value === '' ? '' : SHA256.hex(value)}
            </div>
          </div>
          <div className="flex mt-5 relative">
            <div className="w-28 bg-green p-3 rounded-l-md text-black text-xl font-bold flex-shrink-0">
              SHA512:
            </div>
            <div className=" bg-bluishgreen-dark flex items-center w-full text-xl rounded-r-md pr-2 overflow-x-auto p-3">
              {value === '' ? '' : SHA512.hex(value)}
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-32 bg-green p-3 rounded-l-md text-black text-xl font-bold">
              RMD160:
            </div>
            <div className="w-full bg-bluishgreen-dark flex items-center p-3 text-xl rounded-r-md">
              {value === '' ? '' : RMD160.hex(value)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
