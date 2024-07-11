import { atom } from 'recoil';

// 사용자 이메일
export const EmailAtom = atom<string>({
    key: 'EmailAtom',
    default: '',
  });