import { atom } from 'recoil';

//페이지 번호
export const SendEmailAtom = atom<string>({
    key: 'SendEmailAtom',
    default: "",
});