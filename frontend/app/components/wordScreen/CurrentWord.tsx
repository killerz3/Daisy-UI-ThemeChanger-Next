"use client"
import { UseOSK } from '@/app/provider/UseOSK'
import React from 'react'

export default function CurrentWord() {
    const { finalWord } = UseOSK()
    return (
        <div className='text-5xl text-primary font-extrabold transition-all duration-500  flex flex-wrap gap-2'>
            {finalWord.split("").map((char,index) => <div key={index} className='kbd rounded-lg '>{char}</div>)}
    </div>
  )
}
