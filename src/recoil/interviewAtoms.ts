import { atom } from 'recoil';

// 공통 질문 유무
export const CompanyQuestionAtom = atom<boolean>({
    key: 'CompanyQuestionAtom',
    default: true,
});

// 질문 id
export const QnaIdAtom = atom<number>({
    key: 'QnaIdAtom',
    default: 0,
});

// 자기소개 영상
export const IntroduceAtom = atom<boolean>({
    key: 'IntroduceAtom',
    default: true,
});