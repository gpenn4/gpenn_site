import React from "react";
import {Tilt_Prism} from "next/font/google"
import {Londrina_Outline} from "next/font/google"


const tp = Tilt_Prism({weight:"400"})
const lo = Londrina_Outline({weight:"400"})


export default function Marquee({ text }: { text: string }) {
  return (
    // <div className="w-screen overflow-hidden">
      <div className={`marquee-track ${lo.className}`}>
        <div className="marquee-segment">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
        <div className="marquee-segment" aria-hidden>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>
    // </div>
  )
}