import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { useEffect } from "react";

const App = () => {
  let HeroData = [
    {text1:"Be the", text2:"best version of yourself"},
    {text1:"Get the", text2:"aspiring attitude"},
    {text1:"Follow", text2:"your passion"}
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/> 
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      HeroData={HeroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div> 
  )
}

export default App 