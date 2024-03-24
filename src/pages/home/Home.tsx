import { Button } from '@/components/ui/button';
import WordShuffler from '@/components/ui/word-shuffle-render';
import { useState } from 'react';

const restaurants = [
  '김밥천국',
  '김밥지옥',
  '솔로지옥',
  '메머드커피',
  '일일향',
];

function pickRandom<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function Home() {
  const [name, setName] = useState('나는 맛집');
  const [isLoading, setIsLoading] = useState(false);

  function onClickButton() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setName(pickRandom(restaurants));
    }, 2000);
  }

  return (
    <div>
      <WordShuffler
        key={name}
        text={name}
        options={{
          textColor: '#000000',
          pending: isLoading,
          timeOffset: 5,
          mixCapital: true,
          mixSpecialCharacters: true,
        }}
      />

      <Button onClick={onClickButton}>다음 맛집은!?!?!?</Button>
    </div>
  );
}

export default Home;
