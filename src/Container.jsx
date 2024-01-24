import React, { useState } from 'react'
import TextArea from './TextArea'
import Stats from './Stats'

export default function Container() {
  const [text, setText] = useState(""); 
  const stats = {
  numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  numberOfCharacters: text.length,
  numberOfSpaces: (text.match(/ /g) || []).length,
  facebookCharacterLeft: 3 - text.length
  }

  return (
    <main className='container'>
        <TextArea text={text} setText= {setText}/>
        <Stats stats={stats}/>   
    </main>
  );
}
