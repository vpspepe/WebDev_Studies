import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  const [tweets, setTweets] = useState<string[]>([])
  var

  function createTweet() {
    setTweets([...tweets, "Tweet5"])
    
  }
    
  return(
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button 
      onClick={createTweet}
      style={{
        backgroundColor: "turquoise",
        border: 8,
        padding: "6px 12px",
        color: "black",
        borderRadius: 5,
        fontFamily: "initial"
      }}> Adicionar Tweet</button>  
    </div>
  );
}

export default App
