declare module 'react-input-mask' {
    import * as React from 'react';
  
    export interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
      mask: string;
      maskChar?: string;
      alwaysShowMask?: boolean;
      formatChars?: { [key: string]: string };
      permanents?: number[];
      inputRef?: React.Ref<HTMLInputElement>;
      beforeMaskedValueChange?: (
        newState: { value: string; selection: { start: number; end: number } },
        oldState: { value: string; selection: { start: number; end: number } },
        userInput: string,
        maskOptions: { mask: string; maskChar: string; alwaysShowMask: boolean; formatChars: { [key: string]: string }; permanents: number[] }
      ) => { value: string; selection?: { start: number; end: number } };
  
    }
  
    const InputMask: React.FC<InputMaskProps>;
    export default InputMask;
  }
  