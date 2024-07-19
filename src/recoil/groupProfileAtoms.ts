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