import { atom } from 'recoil';

//기업 이메일
export const emailTypeAtom = atom<string>({
    key: 'emailTypeAtom',
    default: '',
  });

//기업 이름
export const companyTypeAtom = atom<string>({
    key: 'companyTypeAtom',
    default: '',
  });