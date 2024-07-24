import { atom } from 'recoil';

// 공통 질문 유무
export const CompanyQuestionAtom = atom<boolean>({
    key: 'CompanyQuestionAtom',
    default: true,
});

// 질문 인덱스
export const QnaIndexAtom = atom<number>({
    key: 'QnaIndexAtom',
    default: 0,
});

// 자기소개 영상
export const IntroduceAtom = atom<boolean>({
    key: 'IntroduceAtom',
    default: true,
});

// 질문 id
export const QnaIdAtom = atom<number>({
    key: 'QnaIdAtom',
    default: 0,
});

export const LastQna = atom<boolean>({
    key: 'LastQna',
    default: false,
});