import React, { useEffect, useState } from 'react'

interface WordShufflerProps {
  options?: {
    fontSize?: string
    fps?: number
    mixCapital?: boolean
    mixSpecialCharacters?: boolean
    pending: boolean
    textColor?: string
    timeOffset?: number
  }
  text: string
}

interface ShuffledChar {
  char: string
  color: string
}

const WordShuffler: React.FC<WordShufflerProps> = ({ options = {}, text }) => {
  const [shuffledText, setShuffledText] = useState<ShuffledChar[]>([])

  const shuffleOptions = {
    fontSize: '50px',
    fps: 20,
    mixCapital: false,
    mixSpecialCharacters: false,
    pending: true,
    textColor: '#000',
    timeOffset: 100,
    ...options,
  }

  useEffect(() => {
    let currentIndex = 0
    let frameCount = 0
    let combinedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    if (shuffleOptions.mixSpecialCharacters) {
      const specialCharacters = '!§$%&/()=?_<>>^°*#-:;~'.split('')
      combinedChars = [...combinedChars, ...specialCharacters]
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
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const getRandCharacter = (characterToReplace: string) => {
      if (characterToReplace === ' ') {
        return ' '
      }
      const randNum = Math.floor(Math.random() * combinedChars.length)
      return combinedChars[randNum]
    }

    const shuffleText = () => {
      const newText = text.split('').map((char, index) => ({
        char: index < currentIndex ? char : getRandCharacter(char),
        color:
          index < currentIndex ? shuffleOptions.textColor : getRandomColor(),
      }))

      if (
        !shuffleOptions.pending &&
        frameCount % shuffleOptions.timeOffset === 0
      ) {
        if (currentIndex < text.length) {
          currentIndex++
        }
      }

      setShuffledText(newText)
      frameCount++
    }

    const intervalId = setInterval(shuffleText, 1000 / shuffleOptions.fps)

    return () => clearInterval(intervalId)
  }, [text, options, shuffleOptions.pending])

  return (
    <div className="min-h-20">
      {shuffledText.map((item, index) => (
        <span
          key={index}
          style={{ color: item.color, fontSize: shuffleOptions.fontSize }}
        >
          {item.char}
        </span>
      ))}
    </div>
  )
}

export default WordShuffler
