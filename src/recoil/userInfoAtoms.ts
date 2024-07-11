import { atom } from 'recoil';

// 사용자 이메일
export const EmailAtom = atom<string>({
    key: 'EmailAtom',
    default: '',
  });

// 기업 이름
export const CompanyAtom = atom<string>({
  key: 'CompanyAtom',
  default: '',
});