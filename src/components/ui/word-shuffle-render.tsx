import React, { useEffect, useState } from 'react';

interface WordShufflerProps {
  text: string;
  options?: {
    fps?: number;
    pending: boolean;
    timeOffset?: number;
    textColor?: string;
    fontSize?: string;
    mixCapital?: boolean;
    mixSpecialCharacters?: boolean;
  };
}

interface ShuffledChar {
  char: string;
  color: string;
}

const WordShuffler: React.FC<WordShufflerProps> = ({ text, options = {} }) => {
  const [shuffledText, setShuffledText] = useState<ShuffledChar[]>([]);
  const defaultOptions = {
    fps: 20,
    timeOffset: 100, // Adjusted to milliseconds
    textColor: '#000',
    fontSize: '50px',
    mixCapital: false,
    mixSpecialCharacters: false,
    pending: true,
    ...options,
  };

  useEffect(() => {
    let currentIndex = 0;
    let frameCount = 0;
    let combinedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    if (defaultOptions.mixSpecialCharacters) {
      const specialCharacters = '!§$%&/()=?_<>>^°*#-:;~'.split('');
      combinedChars = [...combinedChars, ...specialCharacters];
    }

    const getRandomColor = () => {
      const colors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#9e9e9e',
        '#607d8b',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const getRandCharacter = (characterToReplace: string) => {
      if (characterToReplace === ' ') {
        return ' ';
      }
      const randNum = Math.floor(Math.random() * combinedChars.length);
      return combinedChars[randNum];
    };

    const shuffleText = () => {
      const newText = text.split('').map((char, index) => ({
        char: index < currentIndex ? char : getRandCharacter(char),
        color:
          index < currentIndex ? defaultOptions.textColor : getRandomColor(),
      }));

      if (
        !defaultOptions.pending &&
        frameCount % defaultOptions.timeOffset === 0
      ) {
        if (currentIndex < text.length) {
          currentIndex++;
        }
      }

      setShuffledText(newText);
      frameCount++;
    };

    const intervalId = setInterval(shuffleText, 1000 / defaultOptions.fps);

    return () => clearInterval(intervalId);
  }, [text, options, defaultOptions.pending]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {shuffledText.map((item, index) => (
        <span
          key={index}
          style={{ color: item.color, fontSize: defaultOptions.fontSize }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};

export default WordShuffler;
