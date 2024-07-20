import React from 'react'
import * as U from './Usage.style';

// props 타입 정의
interface UsageProps {
  number: string;
  title: string;
  content: string;
  imgUrl:string
}

const Usage: React.FC<UsageProps> = ({ number, title, content, imgUrl }) => {
  return (
    <>
      <U.UsageComponent>
        <U.UsageNumberIcon>{number}</U.UsageNumberIcon>
        <U.UsageTitle>{title}</U.UsageTitle>
        <U.UsageMain>
          <U.UsageText dangerouslySetInnerHTML={{ __html: content }}/>
          <U.UsageImage src={imgUrl}></U.UsageImage>
        </U.UsageMain>
      </U.UsageComponent>
    </>
  );
}

export default Usage;