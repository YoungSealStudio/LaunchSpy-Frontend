import './slot-machine-image.css';
import './button.css';

import Reel from './Reel';
import { cn } from '@/lib/utils';
import { SLOTS_PER_REEL } from './constants';
import { useState } from 'react';
import { ReelsStopHandlerFunc } from './SlotMachine';

type SlotState = {
  id: number;
  spinId: number;
  isSpinning: boolean;
};

const generateRandomReels = (): SlotState[] => {
  return Array(3)
    .fill(null)
    .map((_, index) => ({
      id: index,
      spinId: getSeed(),
      isSpinning: true,
    }));
};

type SlotMachineProps = {
  onSpinningStop: ReelsStopHandlerFunc;
};

function getSeed(): number {
  return Math.floor(Math.random() * SLOTS_PER_REEL);
}

function SlotMachineImgCore({ onSpinningStop }: SlotMachineProps) {
  const [reels, setReels] = useState<SlotState[]>(generateRandomReels);

  const spin = () => {
    const newSlots = generateRandomReels();
    setReels(newSlots);
  };

  const handleReelsStop = (id: number) => {
    setReels((prev) => {
      const prevCopy = [...prev];

      const targetReel = prevCopy.find((reel) => reel.id === id)!;
      targetReel.isSpinning = false;

      const isReelsAllStop = prevCopy.every(
        (reel) => reel.isSpinning === false
      );

      if (isReelsAllStop) {
        onSpinningStop('stopted');
      }

      return prevCopy;
    });
  };

  return (
    <div className='flex justify-center'>
      <div className='relative'>
        <img src='https://slotmachinescript.com/img/slotmachine1/main_bg_machine.png' />
        <img
          src='https://slotmachinescript.com/img/slotmachine1/reel_overlay.png'
          className='absolute w-[48.4%] h-[35.5%] top-[37.9%] left-[34.2%]'
        />
        <div className='absolute w-[48.4%] h-[35.5%] top-[37.9%] left-[34.2%] flex'>
          {reels.map((slot) => (
            <div
              key={slot.id}
              className='slot-wrapper flex flex-1 items-center'
            >
              <div
                className={cn('slot', `spin-${slot.spinId}`)}
                onAnimationEnd={(e) => {
                  if (e.animationName === 'back-spin') {
                    return;
                  }

                  handleReelsStop(slot.id);
                }}
                style={{
                  animation: `1s ease 0s 1 normal none running back-spin, ${
                    2 + slot.spinId * 0.5
                  }s ease 0s 1 normal none running spin-${slot.spinId}`,
                }}
              >
                <Reel seed={slot.spinId} />
              </div>
            </div>
          ))}
        </div>
        <button
          className='absolute button-85 top-[80%] left-[68%]'
          onClick={spin}
        >
          SPIN
        </button>
      </div>
    </div>
  );
}

export default SlotMachineImgCore;
