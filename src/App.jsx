import {HelpCircle, LineChart, Cog} from 'lucide-react'
import { useState } from 'react'

const App =  () => {
  // eslint-disable-next-line no-unused-vars
  const [words, setWords] = useState([
    {
      id: 1,
      letters: ['','','','','']
    },
    {
      id: 2,
      letters: ['','','','','']
    },
    {
      id: 3,
      letters: ['','','','','']
    },
    {
      id: 4,
      letters: ['','','','','']
    },
    {
      id: 5,
      letters: ['','','','','']
    }
  ])
  
  const handleLetterChange = (e, id) => {
    const value = e.target.value
    const newLetter = {
      id: id,
      letter: value
    }
    setWords(words.map(word => word.id == id ? newLetter : word))
    if(id < 5)
      document.getElementById(id + 1).focus();
    if(value === '' && id > 1)
      document.getElementById(id - 1).focus();
  }
  
  return (
    <div className='h-screen flex flex-col bg-teal-950 text-sky-50'>
      <nav className='h-14 flex justify-around p-2'>
        <article className='text-teal-700'>
          <a><HelpCircle/></a>
        </article>
        <article>
          <h1 className='text-3xl font-bold'>ENIGMEI</h1>
        </article>
        <article className='flex text-teal-700 space-x-1'>
          <a><LineChart/></a>
          <a><Cog/></a>
        </article>
      </nav>
      <section className='flex flex-1 p-2 gap-1 flex-col self-center '>
        {words.map(word => {
          return(
            <div key={word.id} className='flex flex-row gap-1'>
              {word.letters.map((letter, i) => {
                return(
                  <input 
                    key={i}
                    id={i}
                    className='
                      flex 
                      w-14 h-14 
                      border-2 border-teal-700 rounded-lg
                      bg-transparent
                      text-5xl text-center uppercase
                      caret-transparent'
                    maxLength={1}
                    autoFocus={true}
                    value={letter}
                    onChange={() => handleLetterChange}
                  ></input>
                )
              })}
            </div>)
          })
        }
      </section>
      <section className='h-64 bg-slate-600 p-2'>
        teclado
      </section>      
    </div>
  )
}

export default App
