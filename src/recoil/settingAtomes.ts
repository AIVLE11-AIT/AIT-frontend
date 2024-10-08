import { atom } from 'recoil';

//페이지 번호
export const StepAtom = atom<number>({
    key: 'StepAtom',
    default: 1,
  });


//약관 동의 상태
export const Agree1Atom = atom<boolean>({
  key: 'Agree1Atom',
  default: false,
});

export const Agree2Atom = atom<boolean>({
  key: 'Agree2Atom',
  default: false,
});

export const Agree3Atom = atom<boolean>({
  key: 'Agree3Atom',
  default: false,
});

export const PhotoAtom = atom<boolean>({
  key: 'PhotoAtom',
  default: false,
});

// 카메라 테스트 상태
export const CameraAtom = atom<boolean>({
  key: 'CameraAtom',
  default: false,
})
