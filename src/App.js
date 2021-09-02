import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.to("#title", {color: 'red', duration: 3})
  })

  return (<h1 id="title">Hello</h1>)
}

ReactDOM.render(<App />, document.getElementById('root'))