import { useState } from "react"

const App = () => {
  let HeroData = [
    {text1:"Be the", text2:"best version of yourself"},
    {text1:"Get the", text2:"aspiring attitude"},
    {text1:"Follow", text2:"your passion"}
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div></div>
  )
}

export default App 