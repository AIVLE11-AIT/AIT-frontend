import { atom } from 'recoil';

// 임시 비밀번호 전송 이메일
export const SendEmailAtom = atom<string>({
    key: 'SendEmailAtom',
    default: "",
});

export const FindPwAtom = atom<boolean>({
    key: 'FindPwAtom',
    default: false,
});