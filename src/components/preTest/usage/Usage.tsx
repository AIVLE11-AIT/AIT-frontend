import React from 'react'
import * as U from './Usage.style';

// props 타입 정의
interface UsageProps {
  number: string;
  title: string;
}

const Usage: React.FC<UsageProps> = ({ number, title }) => {
  return (
    <>
      <U.UsageComponent>
        <U.UsageNumberIcon>{number}</U.UsageNumberIcon>
        <U.UsageTitle>{title}</U.UsageTitle>
      </U.UsageComponent>
    </>
  );
}

export default Usage;