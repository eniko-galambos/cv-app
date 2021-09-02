import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.to("#hello1", {scale: 2, duration: 3, scrollTrigger: { trigger: "#hello1", toggleActions: "restart pause reverse pause", scrub: 1}})
    gsap.to("#hello2", {scale: 2, duration: 3, scrollTrigger: { trigger: "#hello2", toggleActions: "restart pause reverse pause", scrub: 1}})
    gsap.to("#hello3", {scale: 2, duration: 3, scrollTrigger: { trigger: "#hello3", toggleActions: "restart pause reverse pause", scrub: 1}})
    gsap.to("#hello4", {scale: 2, duration: 3, scrollTrigger: { trigger: "#hello4", toggleActions: "restart pause reverse pause", scrub: 1}})
  })

  return (
    <div>
      <div className="p-60 bg-red-400"><p className="text-3xl font-bold" id="hello1">Hello 1</p></div>
      <div className="p-60 bg-green-400"><p className="text-3xl font-bold" id="hello2">Hello 2</p></div>
      <div className="p-60 bg-yellow-400"><p className="text-3xl font-bold" id="hello3">Hello 3</p></div>
      <div className="p-60 bg-indigo-400"><p className="text-3xl font-bold" id="hello4">Hello 4</p></div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))