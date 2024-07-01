import { atom } from 'recoil';

//페이지 번호
export const StepAtom = atom<number>({
    key: 'StepAtom',
    default: 1,
  });

