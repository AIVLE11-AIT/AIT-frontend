import { atom } from 'recoil';

export type InterviewMake = {
	interviewName: string;
	startDate: string;
	endDate: string;
	timeType: number;
	format1: string;
	format2: string;
	interviewPlace: string;
};

export const interviewMakeAtom = atom<InterviewMake>({
	key: 'interviewMakeAtom',
	default: {
		interviewName: '',
		startDate: '',
		endDate: '',
		timeType: 0,
		format1: '',
		format2: '',
		interviewPlace: '',
	},
});

//지원 기간 시작
export const recruitStartDateAtom = atom<string>({
	key: 'recruitStartDateAtom',
	default: '',
});

//지원 기간 끝
export const recruitEndDateAtom = atom<string>({
	key: 'recruitEndDateAtom',
	default: '',
});

//면접 시간
export const interviewTimeAtom = atom<number>({
	key: 'interviewTimeAtom',
	default: 5,
});

export const selectedDatesAtom = atom<string[]>({
	key: 'selectedDatesAtom',
	default: [],
});

export const scheduleAtom = atom<Date[]>({
	key: 'scheduleAtom',
	default: [],
});