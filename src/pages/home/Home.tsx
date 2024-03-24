import { useState } from 'react'

import { Button } from '@/components/ui/button'
import WordShuffler from '@/components/ui/word-shuffle-render'

const restaurants = ['김밥천국', '김밥지옥', '솔로지옥', '메머드커피', '일일향']

function pickRandom<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function Home() {
  const [name, setName] = useState('나는 맛집')
  const [isLoading, setIsLoading] = useState(false)

  function onClickButton() {
    setIsLoading(true)
    setName('HELLO WORLD WORLD')

    setTimeout(() => {
      setIsLoading(false)
      setName(pickRandom(restaurants))
    }, 2000)
  }

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div>LUNCH SPY</div>

        <WordShuffler
          key={name}
          options={{
            mixCapital: true,
            mixSpecialCharacters: true,
            pending: isLoading,
            textColor: '#000000',
            timeOffset: 5,
          }}
          text={name}
        />

        <Button onClick={onClickButton}>다음 맛집은!?!?!?</Button>
      </div>
    </>
  )
}

export default Home
