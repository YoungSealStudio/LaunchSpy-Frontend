import SymbolBox from './SymbolBox';
import { SLOTS_PER_REEL } from './constants';

type ReelProps = {
  seed: number;
};

function Reel({ seed }: ReelProps) {
  const createSlots = () => {
    return Array.from({ length: SLOTS_PER_REEL }, (_, i) => i).map((i) => {
      const angle = (360 / SLOTS_PER_REEL) * i;
      const content = (seed + i) % 12;

      i === 0 && console.log('seed, angle, content:', seed, angle, content);
      return { angle, content };
    });
  };

  return createSlots().map((slot, index) => (
    <SymbolBox key={index} angle={slot.angle} content={slot.content} />
  ));
}

export default Reel;
