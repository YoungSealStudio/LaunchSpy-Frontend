import SlotMachineImgCore from './SlotMachineImg';

type SlotMachineResult = string;

export type ReelsStopHandlerFunc = (result: SlotMachineResult) => void;

type Props = {
  onReelsStop: ReelsStopHandlerFunc;
};

function SlotMachine({ onReelsStop }: Props) {
  return <SlotMachineImgCore onSpinningStop={onReelsStop} />;
}

export default SlotMachine;
