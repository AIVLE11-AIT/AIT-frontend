import { atom } from 'recoil';

// 사용자 이메일
export const EmailAtom = atom<string>({
    key: 'EmailAtom',
    default: '',
  });

  // 토큰
export const TokenAtom = atom<string>({
    key: 'TokenAtom',
    default: '',
  });