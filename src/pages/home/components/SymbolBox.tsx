import { REEL_RADIUS } from './constants';

type SymbolBoxProps = {
  angle: number;
  content: string | number;
};

export default function SymbolBox({ angle, content }: SymbolBoxProps) {
  const transform = `rotateX(${angle}deg) translateZ(${REEL_RADIUS}px)`;

  return (
    <div
      className='flex justify-center items-center slot-item text-center'
      style={{ transform }}
    >
      <p>{content}</p>
    </div>
  );
}
