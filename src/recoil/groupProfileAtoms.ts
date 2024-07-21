import { atom } from 'recoil';

// 면접 id
export const GroupIdAtom = atom<number>({
    key: 'GroupIdAtom',
    default: 0,
});

// 면접 제목
export const GroupNameAtom = atom<string>({
    key: 'GroupNameAtom',
    default: '',
});

// 면접 시작일
export const interviewStartAtom = atom<string>({
    key:'interviewStartAtom',
    default:'',
})

// 면접 종료일
export const interviewEndAtom = atom<string>({
    key:'interviewEndAtom',
    default:'',
})